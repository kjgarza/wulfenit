# Wulfenit - Emotion Recognition and Image Generation

This project aims to use video capturing to identify emotions on faces, and use that as an input to generate a stream of images that try to match a given emotion.

## Features

- Real-time emotion detection from video feed
- Generation of images based on detected emotion

## How it works

1. The application captures video in real-time.
2. It then uses a trained machine learning model to identify the emotion on the faces in the video.
3. Based on the identified emotion, it generates a stream of images that match the emotion.

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/kjgarza/wulfenit.git
cd wulfenit
pip install -r requirements.txt
```