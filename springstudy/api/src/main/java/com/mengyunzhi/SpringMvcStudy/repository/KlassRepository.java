package com.mengyunzhi.SpringMvcStudy.repository;

import com.mengyunzhi.SpringMvcStudy.entity.Klass;
import org.springframework.data.repository.CrudRepository;

/**
 * 班级
 */
public interface KlassRepository extends CrudRepository<Klass, Long> {
}
