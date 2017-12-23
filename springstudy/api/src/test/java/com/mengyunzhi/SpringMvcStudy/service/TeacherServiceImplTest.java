package com.mengyunzhi.SpringMvcStudy.service;

import com.mengyunzhi.SpringMvcStudy.repository.Teacher;
import com.mengyunzhi.SpringMvcStudy.repository.TeacherRepository;
import com.mengyunzhi.SpringMvcStudy.service.TeacherService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TeacherServiceImplTest {

    @Autowired
    private TeacherService teacherService;
    @Autowired
    private TeacherRepository teacherRepository;

    @Test
    public void update() throws Exception {
        // 新建一个教师张三,并持久化
        Teacher zhangsanTeacher = new Teacher();
        zhangsanTeacher.setName("张三");
        zhangsanTeacher.setUsername("zhangsan");
        zhangsanTeacher.setSex(true);
        zhangsanTeacher.setEmail("zhangsan@yunzhiclub.com");
        teacherRepository.save(zhangsanTeacher);
        Long id = zhangsanTeacher.getId();

        // 新建一个教师李四
        Teacher lisiTeacher = new Teacher();
        lisiTeacher.setName("李四");
        lisiTeacher.setUsername("lisi");
        lisiTeacher.setSex(false);
        lisiTeacher.setEmail("lisi@yunzhiclub.com");

        // 用李四的信息来跟新张三的信息
        teacherService.update(id, lisiTeacher);

        // 断言更新成功
        Teacher newTeacher = teacherRepository.findOne(id);
        assertThat(newTeacher.getName()).isEqualTo("李四");
        assertThat(newTeacher.getUsername()).isEqualTo("lisi");
        assertThat(newTeacher.getSex()).isFalse();
        assertThat(newTeacher.getEmail()).isEqualTo("lisi@yunzhiclub.com");
    }

    @Test
    public void deleteTest() throws Exception {
        // 先添加一个数据
        Teacher teacher = new Teacher();
        teacherRepository.save(teacher);
        Long id = teacher.getId();

        // 然后再删除这个数据
        teacherRepository.delete(id);

        // 断言这个删除成功(查的时候,查不到了)
        Teacher newTeacher = teacherRepository.findOne(id);
        assertThat(newTeacher)
                .isNull();
    }
}