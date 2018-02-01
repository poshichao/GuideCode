package com.mengyunzhi.SpringMvcStudy.service;

import com.mengyunzhi.SpringMvcStudy.entity.Klass;

/**
 * @author poshichao
 */
public interface KlassService {
    /**
     * 保存班级
     *
     * @param klass 要保存的班级信息
     * @return
     */
    Klass save(Klass klass);

    Iterable<Klass> getAll();

    Klass getById(Long id);
    void delete(Long id);

    void updateByIdAndKlass(Long id, Klass newKlass);
}
