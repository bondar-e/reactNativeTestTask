#import "RCTCalculationModule.h"

@implementation RCTCalculationModule : NSObject

RCT_EXPORT_MODULE(CalculationModule);

RCT_EXPORT_METHOD(calculate:(nonnull NSNumber *)firstNumber secondNumber:(nonnull NSNumber *)secondNumber operation:(NSString *)operation callback:(RCTResponseSenderBlock)callback)
{
  NSNumber *result;
  
  if ([operation isEqual: @"+"]) {
    result = [NSNumber numberWithFloat:([firstNumber floatValue] + [secondNumber floatValue])];
  } else if ([operation isEqual: @"-"]) {
   result = [NSNumber numberWithFloat:([firstNumber floatValue] - [secondNumber floatValue])];
  } else if ([operation isEqual: @"*"]) {
   result = [NSNumber numberWithFloat:([firstNumber floatValue] * [secondNumber floatValue])];
  } else if ([operation isEqual: @"/"]) {
   result = [NSNumber numberWithFloat:([firstNumber floatValue] / [secondNumber floatValue])];
  }

  callback(@[[NSNull null], result]);
 }

@end
