package com.mengyunzhi.SpringMvcStudy.repository;

import com.mengyunzhi.SpringMvcStudy.entity.Klass;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * 班级
 */
public interface KlassRepository extends PagingAndSortingRepository<Klass, Long> {
}
