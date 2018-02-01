package com.mengyunzhi.SpringMvcStudy.service;

import com.mengyunzhi.SpringMvcStudy.entity.Klass;
import com.mengyunzhi.SpringMvcStudy.repository.KlassRepository;
import org.apache.log4j.Logger;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

/**
 * @author poshichao
 * 班级
 */
public class KlassServiceImplTest extends ServiceTest {
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

    @Test
    public void delete() throws Exception {
        logger.info("new 一个对象");
        Klass klass = new Klass();
        klassRepository.save(klass);

        logger.info("调用M层的delete方法");
        klassService.delete(klass.getId());

        logger.info("断言是否删除成功");
        Klass newKlass = klassRepository.findOne(klass.getId());
        assertThat(newKlass).isNull();
    }

}