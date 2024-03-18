---
title: "Code in Motion: Unveiling the Programming Behind a Self-Driving Car Project"
description: "Explore the intricate coding journey of a self-driving car project, programmed in C++ and steered by a custom Python application for optimal control."
date: "2019-05-01"
banner:
  src: "../../images/car.jpg"
  alt: "Micro controller attached to a plexiglass board with wheels to make a miniature car"
categories:
  - "System Implementation"
keywords:
  - "C++"
  - "Python"
  - "C"
  - "Development"
  - "Projects"
---

## Problem Statement
In the context of our project, the self-driving car was tasked with navigating through an obstacle course, blending manual controls with autonomous driving capabilities. This multifaceted challenge highlights the need for robust programming solutions that seamlessly transition between human-operated and autonomous modes, ensuring both safety and efficiency throughout the course.

## Solution Overview
An integrated solution for automating navigation and control in self-driving car projects. Developed using C++ for the core programming and a custom Python application for controller management, this system offers a versatile platform for seamlessly transitioning between manual and autonomous driving modes. With meticulous design and testing, our solution aims to enhance the performance and safety of self-driving cars, particularly in scenarios like navigating obstacle courses with both manual and autonomous segments.

[Check Out My Code!](https://github.com/barillamw/Project-WorkoutTrackingAPI)

### Manual Control
A Python-based application is employed to connect a wireless controller to the car, facilitating navigation through the course along various paths with precision and ease.

### Autonomous Driving 
The utilization of cutting-edge IR sensors enables lines on the ground to be detected by the system, allowing the car to autonomously navigate along predefined paths with remarkable accuracy and efficiency.

### Menu System
An intuitive menu system is provided, empowering users to effortlessly switch between manual and autonomous driving modes, as well as configure various settings using the onboard LCD display, ensuring a seamless and user-friendly experience.

## Smooth Driving
With wheels controlled by PWM, smooth and precise steering is ensured by the system, enhancing maneuverability and overall driving experience, whether in manual or autonomous mode.

## Project Stack
[![cpp][cpp]][cpp-url]
[![Python][Python]][Python-url]


!["Image of miniature car"](../../images/car.jpg 'Photo by Michael Barilla')




[cpp]: https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white
[cpp-Url]: https://en.cppreference.com/w/
[Python]: https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54
[Python-url]: https://www.python.org/
