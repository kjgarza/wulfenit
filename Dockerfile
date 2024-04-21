# Use an official Python runtime as the base image
FROM python:3.12-slim

# Set the working directory in the container
WORKDIR /src

# Install the required system dependencies
RUN apt-get update && apt-get install -y \
    libgl1-mesa-glx \
    python3-opencv

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