package com.ust.debugging;

public class FirstTest {
	
	int a;
	boolean b;

	  
	   void m1(){
	    System.out.println("from m1" + this.a+this.b);
	  }

	  void m2(){
	    this.b = false;
	    System.out.println("1"+a++);
	    System.out.println("2");
	    System.out.println("3");
	    this.m1();
	    this.b = true;
	    System.out.println("4"+a++);
	    System.out.println("5");
	    System.out.println("6");
	    
	  }
	  
	  public static void main(String[] args) {
		new FirstTest().m2();
	}
	}

