package com.mengyunzhi.SpringMvcStudy.service;

import com.mengyunzhi.SpringMvcStudy.repository.Klass;
import com.mengyunzhi.SpringMvcStudy.repository.KlassRepository;
import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

/**
 * @author poshichao
 * 班级
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class KlassServiceImplTest {

    private final static Logger logger = Logger.getLogger(KlassServiceImplTest.class.getName());
    @Autowired
    private KlassService klassService;          // 班级
    @Autowired
    private KlassRepository klassRepository;    // 班级

    @Test
    public void save() throws Exception {
        logger.info("new一个对象");
        Klass klass = new Klass();

        logger.info("调用保存方法");
        klassService.save(klass);

        logger.info("取数据表中查找这个对象");
        Klass newKlass = klassRepository.findOne(klass.getId());

        logger.info("断言这个对象不为空");
        assertThat(newKlass).isNotNull();
    }

    @Test
    public void getAll() throws Exception {
        logger.info("new一个对象");
        Klass klass = new Klass();

        logger.info("调用保存方法");
        klassService.save(klass);

        // 获取数据库中所有的班级信息
        List<Klass> klassList = (List<Klass>) klassService.getAll();

        // 断言,获取到的班级数不为空
        assertThat(klassList.size()).isNotZero();
    }

}