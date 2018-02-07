package com.mengyunzhi.SpringMvcStudy.controller;

import com.mengyunzhi.SpringMvcStudy.entity.Teacher;
import com.mengyunzhi.SpringMvcStudy.repository.TeacherRepository;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class TeacherControllerTest extends ControllerTest {
    final static String url = "/Teacher/";

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private TeacherRepository teacherRepository;

    @Test
    public void getAllTest() throws Exception {
        this.mockMvc
                .perform(get(url))          // 使用get方法,访问url
                .andDo(print())             // 打印请求的信息
                .andExpect(status().isOk());// 断言,请求的状态成功
    }

    @Test
    public void getTest() throws Exception {
        // 创建一个新的教师
        Teacher teacher = new Teacher();

        // 为教师赋值
        teacher.setName("name");
        teacher.setUsername("username");
        teacher.setEmail("email");
        teacher.setSex(true);

        // 持久化教师
        teacherRepository.save(teacher);

        // 拼接url
        String getUrl = url + String.valueOf(teacher.getId());

        // 根据url进行get请求，并断言
        this.mockMvc
                .perform(get(getUrl))
                .andDo(print())
                .andExpect(status().isOk());
    }

    @Test
    public void updateTest() throws Exception {
        // 添加测试数据
        // 实例化一个Teacher,并持久化
        Teacher teacher = new Teacher();
        teacherRepository.save(teacher);

        // 更新这个持久化的Teacher
        String updateUrl = url + teacher.getId();
        this.mockMvc
                .perform(put(updateUrl)
                        .contentType(MediaType.APPLICATION_JSON_UTF8)
                        .content("{}"))         // put方法来请求这个路由
                .andDo(print())                 // 请求后,打印这个数据
                .andExpect(status().isOk());    // 断言返回状态为真
    }

    @Test
    public void deleteTest() throws Exception {
        // 先添加一个数据
        Teacher teacher = new Teacher();
        teacherRepository.save(teacher);
        Long id = teacher.getId();

        // 然后再删除这个数据
        String deleteUrl = url + id;
        this.mockMvc
            .perform(delete(deleteUrl)
                .contentType(MediaType.APPLICATION_JSON_UTF8))
            .andDo(print())                 // 请求,打印返回信息
            .andExpect(status().isOk());    // 断言返回状态为真

        // 断言这个删除成功了
        Teacher newTeacher = teacherRepository.findOne(id);
        assertThat(newTeacher).isNull();

    }

}