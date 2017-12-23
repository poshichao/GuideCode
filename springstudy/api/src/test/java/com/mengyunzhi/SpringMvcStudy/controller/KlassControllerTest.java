package com.mengyunzhi.SpringMvcStudy.controller;

import com.mengyunzhi.SpringMvcStudy.repository.Klass;
import com.mengyunzhi.SpringMvcStudy.repository.KlassRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * @author poshichao
 */
@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class KlassControllerTest {
    static final String url = "/Klass/";

    @Autowired
    private MockMvc mockMvc;        // 模拟进行REST请求
    @Autowired
    private KlassRepository klassRepository;    // 班级

    @Test
    public void saveTest() throws Exception {
        this.mockMvc
                .perform(post(url)
                    .content("{}")
                    .header("content-type", MediaType.APPLICATION_JSON_UTF8))
                .andDo(print())
                .andExpect(status().is(201));
    }

    @Test
    public void getAll() throws Exception {
        this.mockMvc
                .perform(get(url)
                        .header("content-type", MediaType.APPLICATION_JSON_UTF8))
                .andDo(print())
                .andExpect(status().isOk());
    }

    @Test
    public void findOneByIdTest() throws Exception {
        // 创建一个班级实体
        Klass klass = new Klass();

        // 为这个班级赋值一个随机字符串
        String name = "zkjchfkjahfauhalsfkj";
        klass.setName(name);

        // 持久化
        klassRepository.save(klass);

        // 获取这个班级,并断言就是持久化的班级
        String getUrl = "/Klass/" + klass.getId().toString();

        this.mockMvc
                .perform(get(getUrl)
                        .header("content-type", MediaType.APPLICATION_JSON_UTF8))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.name").value(name));
    }

    @Test
    public void updateTest() throws Exception {
        // 先有一个实体
        Klass klass = new Klass();

        // 持久化
        klassRepository.save(klass);

        // 更新这个实体
        String newName = "123";
        String putUrl = "/Klass/" + klass.getId().toString();
        this.mockMvc
                .perform(put(putUrl)
                    .header("content-type", MediaType.APPLICATION_JSON_UTF8)
                    .content("{\"name\":\"" + newName + "\"}"))
                .andExpect(status().isOk());

        // 断言更新成功(从数据库中查找这个实体对象,获取他的name,并看是否更新成功)
        Klass newKlass = klassRepository.findOne(klass.getId());
        assertThat(newKlass.getName()).isEqualTo("123");
    }

}