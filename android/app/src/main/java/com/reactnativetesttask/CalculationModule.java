package com.reactnativetesttask;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class CalculationModule extends ReactContextBaseJavaModule {
    CalculationModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "CalculationModule";
    }

    @ReactMethod
    public void calculate(Double firstNumber, Double secondNumber, String operation, Callback callback) {
        Double result = null;

        switch (operation) {
            case "+":
                result = firstNumber + secondNumber;
                break;
            case "-":
                result = firstNumber - secondNumber;
                break;
            case "*":
                result = firstNumber * secondNumber;
                break;
            case "/":
                result = firstNumber / secondNumber;
                break;
        }

        callback.invoke(null, result);
    }
}