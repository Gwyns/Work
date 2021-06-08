package com.example.purf.serv;

import javax.persistence.*;

@Entity
@Table(name = "parametrs")

public class Parametrs {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "idparametrs")
    private int idparametrs;

    @Column(name = "parametr")
    private String parametr;

    @Column(name = "inf")
    private String inf;

    @Column(name = "tasks_idtask")
    private int tasks_idtask;


    public int getIdparametrs() {
        return idparametrs;
    }

    public void setIdparametrs(int idparametrs) {
        this.idparametrs = idparametrs;
    }

    public String getParametr() {
        return parametr;
    }

    public void setParametr(String parametr) {
        this.parametr = parametr;
    }

    public String getInf() {
        return inf;
    }

    public void setInf(String inf) {
        this.inf = inf;
    }

    public int getTasks_idtask() {
        return tasks_idtask;
    }

    public void setTasks_idtask(int tasks_idtask) {
        this.tasks_idtask = tasks_idtask;
    }
}

