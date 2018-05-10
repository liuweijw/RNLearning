//
//  RnToast.m
//  RNLearning
//
//  Created by gavin on 2018/5/9.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "RnToast.h"
#import "ToolClass.h"

@implementation RnToast
@synthesize bridge = _bridge;
RCT_EXPORT_MODULE();

- (instancetype)init {
  if(self = [super init]) {
//    [NSTimer scheduledTimerWithTimeInterval:1.0 target:self selector:@selector(sendEventToJS) userInfo:nil repeats:NO];
  }
  return self;
}

RCT_EXPORT_METHOD(show:(NSString *)name type:(int)type)
{
  NSLog(@"%@--%d",name,type);
  [ToolClass showMessage:name];
 
}
- (NSDictionary *)constantsToExport
{
  return @{ @"LONG": @1 ,@"SHORT": @0,@"receiveNotificationName":@"receive_notification_test"};
}

//发送事件
- (void)sendEventToJS {
//  [self.bridge.eventDispatcher sendAppEventWithName:@"keyboardWillShow"
//                                               body:@{@"key": @"zcy"}];

}
@end
