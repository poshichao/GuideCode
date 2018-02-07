package com.mengyunzhi.SpringMvcStudy.repository;

import com.mengyunzhi.SpringMvcStudy.SpringMvcStudyApplicationTests;
import com.mengyunzhi.SpringMvcStudy.entity.Klass;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import static org.assertj.core.api.Assertions.assertThat;

public class KlassRepositoryTest extends SpringMvcStudyApplicationTests {
    @Autowired
    private KlassRepository klassRepository;
    @Test
    public void findTest() {
        Iterable<Klass> klasses = klassRepository.findAll();
        assertThat(klasses).isNotNull();
    }

    @Test
    public void findAllTest() {
        PageRequest pageRequest = new PageRequest(0, 2);
        Page<Klass> klasses = klassRepository.findAll(pageRequest);
        assertThat(klasses.getTotalElements()).isGreaterThanOrEqualTo(0);
    }
}