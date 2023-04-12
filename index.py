import pyautogui
import random
import time

while True:
    x = random.randint(100,800)
    y = random.randint(100,800)
    pyautogui.moveTo(x,y,0.5)
    time.sleep(1)