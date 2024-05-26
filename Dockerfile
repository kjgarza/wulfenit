# Use an official Python runtime as the base image
FROM python:3.12-slim

# Set the working directory in the container
WORKDIR /src

# Install the required system dependencies
RUN apt-get update && apt-get install -y \
    libgl1-mesa-glx \
    python3-opencv


RUN mkdir -p /usr/share/man/man1 \
    && apt-get update \
    && DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
    libgtk2.0-dev\
    libglib2.0-0\
    ffmpeg\
    libsm6\
    libxext6\
    git\
    wget\
    && rm -rf /var/lib/apt/lists/*


# Copy the requirements file to the working directory
COPY pyproject.toml poetry.lock* ./

# Install Poetry
RUN pip install --no-cache-dir poetry

# Install Python dependencies using Poetry
RUN poetry config virtualenvs.create false \
  && poetry install --no-interaction --no-ansi


# Copy the rest of the project files to the working directory
COPY . .

# Specify the command to run when the container starts
CMD [ "bash", "ls" ]