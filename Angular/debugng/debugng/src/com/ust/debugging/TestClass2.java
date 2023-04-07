package com.ust.debugging;

public class TestClass2 {
	int a;
	int b;
	int x;
	int a1[] = {2,5,7,8,5};
	int b1[] = {23,43,27,32,12};
	int x1[] = {18,19,20,21,22};
	
	public static void main(String[] args) {
		
		TestClass2 tc = new TestClass2();
		
		
		for(int i=0;i<5;i++) {
			System.out.println("ax^2 + bx^2 + 2ab ="+((tc.a1[i]*tc.x1[i]) + (tc.b1[i]*tc.x1[i]) + (2*(tc.a1[i])*(tc.b1[i])) ));
			
		}
		
	}
	

}

