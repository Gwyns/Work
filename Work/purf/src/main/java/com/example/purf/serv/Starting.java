package com.example.purf.serv;


import javax.persistence.*;
import java.sql.Time;
import java.sql.Timestamp;


@Entity
@Table(name = "starting")

public class Starting {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idstarting")
    private int idstarting;
    @Column(name = "den_nedeli")
    private String den_nideli;
    @Column(name = "vremia")
    private Time vremia;
    @Column(name = "interval")
    private Timestamp interval;
    @Column(name = "edinststart")
    private Timestamp edinststart;
    @Column(name ="tasks_idtask")
    private int tasks_idtask;
    @Column(name = "mecetc")
    private String mecetc;

    public int getIdstarting() {
        return idstarting;
    }

    public void setIdstarting(int idstarting) {
        this.idstarting = idstarting;
    }

    public String getDen_nideli() {
        return den_nideli;
    }

    public void setDen_nideli(String den_nideli) {
        this.den_nideli = den_nideli;
    }

    public Time getVremia() {
        return vremia;
    }

    public void setVremia(Time vremia) {
        this.vremia = vremia;
    }

    public Timestamp getInterval() {
        return interval;
    }

    public void setInterval(Timestamp interval) {
        this.interval = interval;
    }

    public Timestamp getEdinststart() {
        return edinststart;
    }

    public void setEdinststart(Timestamp edinststart) {
        this.edinststart = edinststart;
    }

    public int getTasks_idtask() {
        return tasks_idtask;
    }

    public void setTasks_idtask(int tasks_idtask) {
        this.tasks_idtask = tasks_idtask;
    }

    public String getMecetc() {
        return mecetc;
    }

    public void setMecetc(String mecetc) {
        this.mecetc = mecetc;
    }
}
