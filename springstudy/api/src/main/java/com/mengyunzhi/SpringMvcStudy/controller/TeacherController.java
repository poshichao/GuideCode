package com.mengyunzhi.SpringMvcStudy.controller;

import com.mengyunzhi.SpringMvcStudy.service.TeacherService;
import com.mengyunzhi.SpringMvcStudy.entity.Teacher;
import com.mengyunzhi.SpringMvcStudy.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Teacher")
public class TeacherController {
    @Autowired
    private TeacherRepository teacherRepository;
    @Autowired
    private TeacherService teacherService;      // 教师

    @GetMapping("")
    public Iterable<Teacher> getAll() {
        Iterable teachers = teacherRepository.findAll();
        return teachers;
    }

    // 新增一个地址为： /Teacher/ 的post方法
    @PostMapping("/")
    public Teacher save(@RequestBody Teacher teacher) {
        teacherRepository.save(teacher);
        return teacher;
    }

    @RequestMapping("/helloWorld")
    public HelloWorld helloWorld() {
        HelloWorld helloWorld = new HelloWorld();
        helloWorld.setName("this is name");
        helloWorld.setValue("this is value");
        return helloWorld;
    }

    // 使用{id} 来说明，将/Teacher/xxxx中的xxxx命名为id
    @GetMapping("/{id}")
    public Teacher get(@PathVariable Long id) {
        Teacher teacher = teacherRepository.findOne(id);
        return teacher;
    }

    // 定义一个put路由来更新数据
    @PutMapping("/{id}")
    public void update(@RequestBody Teacher teacher, @PathVariable Long id) {
        teacherService.update(id, teacher);
        return;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        teacherService.delete(id);
    }

    static public class HelloWorld {
        private String name;
        private String value;

        public HelloWorld() {
        }

        public HelloWorld(String name, String value) {
            this.name = name;
            this.value = value;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getValue() {
            return value;
        }

        public void setValue(String value) {
            this.value = value;
        }

        @Override
        public String toString() {
            return "HelloWorld{" +
                    "name='" + name + '\'' +
                    ", value='" + value + '\'' +
                    '}';
        }
    }
}
