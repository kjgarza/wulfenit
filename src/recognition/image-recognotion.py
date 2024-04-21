from fer import FER
import cv2

img = cv2.imread("./IMG_20240225_114045.jpg")
detector = FER()
detector.detect_emotions(img)