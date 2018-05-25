//
//  MainPageViewController.m
//  RNLearning
//
//  Created by gavin on 2018/5/9.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "MainPageViewController.h"
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import "RnToast.h"

@interface MainPageViewController ()

@end

@implementation MainPageViewController
@synthesize bridge = _bridge;

- (void)viewDidLoad {
    [super viewDidLoad];
  
    // Do any additional setup after loading the view from its nib.
}

- (IBAction)pageviewClick:(id)sender {
  
  UIButton * abtn = (UIButton *)sender;
  NSURL *jsCodeLocation;
  NSDictionary *props = @{@"routerType" : [NSString stringWithFormat:@"%ld",(long)abtn.tag]};
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
  
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"RNLearning"
                                               initialProperties:props
                                                   launchOptions:nil];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  [self.navigationController pushViewController:rootViewController animated:YES];

}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/


@end
