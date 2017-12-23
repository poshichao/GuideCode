package com.mengyunzhi.SpringMvcStudy.service;

import com.mengyunzhi.SpringMvcStudy.repository.Teacher;

/**
 * 教师
 * poshichao
 */
public interface TeacherService {
    /**
     * 更新实体
     * @param id
     * @param teacher
     * poshichao
     */
    void update(Long id, Teacher teacher);

    /**
     * 删除实体
     * @param id
     */
    void delete(Long id);
}
