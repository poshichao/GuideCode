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
                .perform(get(url))              // 使用get方法,访问url
                .andDo(print())                 // 打印请求信息
                .andExpect(status().isOk());    // 断言,请求成功
    }

    @Test
    public void getTest() throws Exception {
        // 创建一个教师
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

        // 调用get方法并断言
        this.mockMvc
                .perform(get(getUrl))
                .andExpect(status().isOk());
    }

    @Test
    public void updateTest() throws Exception {
        // 添加测试数据
        Teacher teacher = new Teacher();

        // 将数据持久化
        teacherRepository.save(teacher);

        // 拼接url
        // String updateUrl = url + teacher.getId().toString() 同下;
        String updateUrl = url + String.valueOf(teacher.getId());

        // 调用update方法更新数据
        this.mockMvc
                .perform(put(updateUrl)
                        .contentType(MediaType.APPLICATION_JSON_UTF8)
                        .content("{}"))         // 调用put方法,模拟更新数据
                .andDo(print())
                .andExpect(status().isOk());    // 断言返回状态成功
    }

    @Test
    public void deleteTest() throws Exception {
        // 添加一个数据
        Teacher teacher = new Teacher();
        teacherRepository.save(teacher);
        Long id = teacher.getId();

        // 删除这个数据
        String deleteUrl = url + String.valueOf(id);
        this.mockMvc
                .perform(delete(deleteUrl)
                        .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().isOk());

        // 断言删除成功
        Teacher newTeacher = teacherRepository.findOne(id);
        assertThat(newTeacher).isNull();
    }

}