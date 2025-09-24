import redactImage from './images/redact.jpg';
import rateFlixImage from './images/rateflix.png';
import tamaLife from './images/tamalife.png';

import lumiSphereImage from './images/lumisphere2.jpg';
import lumiSphereVideo from './images/interaction-video1.mp4';
import lumiSphereSchematic from './images/a0_circuit.png';
import lumiSphereCD1 from './images/cd1.jpg';
import lumiSphereCD2 from './images/cd2.jpg';
import lumiSphereCD3 from './images/cd3.jpg';

import drumSenseImage from './images/drumsense.png';
import drumSenseVideo from './images/a1_interaction.mp4';
import drumSenseSchematic from './images/a1_circuit.png';
import drumSenseCD1 from './images/a1_cd1.jpg';
import drumSenseCD2 from './images/a1_cd2.jpg';
import drumSenseCD3 from './images/a1_cd3.jpg';

import pulseLinkImage from './images/pulselink.png';
import pulseLinkVideo from './images/a3_interaction.mp4';
import pulseLinkSchematic from './images/a3_circuit.png';
import pulseLinkCD1 from './images/a3_cd1.jpg';
import pulseLinkCD2 from './images/a3_cd2.jpg';
import pulseLinkCD3 from './images/a3_cd3.jpg';

export const introduction = {
  part1: `I’m a Computer Science graduate from the University of Calgary, with a minor in Data Science. My experience spans building full-stack applications, scalable back-end systems, and cloud-deployed architectures. I’ve led projects that range from real-time pipelines and REST APIs to production-ready web apps, earning recognition such as 1st place at Calgary Hacks 2025.`,
  
  part2: `I’m now seeking opportunities in full-stack or back-end development, where I can apply my skills in designing performant APIs, optimizing databases, and building scalable, user-focused applications. Feel free to explore my portfolio, and let’s connect to discuss how we can create impactful solutions together!`
};

export const projects = [
  {
    cover: redactImage,
    title: "Redact",
    description: " A modern web app designed to eliminate hiring bias by automatically redacting personally identifiable and potentially discriminatory information from job applications.",
    tech: ["React", "Axios", "Node.js", "Express", "MongoDB", "JWT", "Python", "Flask", "Selenium", "Langchain", "OpenAI"],
    github: "https://github.com/Aarij00/Redact",
  },
  {
    cover: rateFlixImage,
    title: "RateFlix",
    description: "A web app aggregating Netflix movie catalogs with IMDB ratings, powered by React, Clerk, GraphQL, Redis, and Express.",
    tech: ["React", "Axios", "Express", "Node.js", "Redis", "Docker", "Apollo", "GraphQL", "PostgreSQL", "Prisma", "ECS", "RDS", "CloudFront"],
    github: "https://github.com/Aarij00/RateFlix",
  },
  {
    cover: tamaLife,
    title: "Deforestation Risk",
    description: "An interactive dashboard that visualizes and predicts deforestation risk using geospatial datasets and deep learning models, built to support data-driven policymaking.",
    tech: ["Python", "Streamlit", "Pandas", "Numpy", "Folium",  "Google Earth Engine", "Shapely"],
    github: "https://github.com/Aarij00/TamaLife",
  },
  {
    cover: tamaLife,
    title: "TamaLife",
    description: "TamaLife is a modern take on the classic Tamagotchi virtual pet, combining mobile app technology, machine learning, and IoT hardware to create an interactive pet care experience. Built during CalgaryHacks 2025.",
    tech: ["React Native", "Expo", "TypeScript", "Node.js", "Express",  "JWT", "MongoDB", "TensorFlow", "Arduino"],
    github: "https://github.com/Aarij00/TamaLife",
  },
  {
    cover: lumiSphereImage,
    title: "LumiSphere",
    description: "A smart LED lamp that uses an Arduino Leonardo to control the brightness of a light bulb based on the ambient light level.",
    tech: ["Arduino Leonardo", "Arduino IDE", "C", "Tinkercad"],
    github: "https://aarij00.github.io/aarij-portfolio/project.html?project=1",
    introduction: "The LumiSphere is an interactive nightstand LED lamp that combines modern design with intuitive controls. A joystick lets you adjust the color of the light, and a press of the joystick freezes the color at any position. Pressing the joystick again in its neutral position unfreezes the color, allowing for continuous customization. Additionally, a button controls brightness levels and acts as the on/off switch, making it easy to tailor the ambiance to your preference. This lamp is a perfect blend of style and functionality for any space.",
    conceptDevelopment: {
      images: [
        { src: lumiSphereCD1, caption: "cd1" },
        { src: lumiSphereCD2, caption: "cd2" },
        { src: lumiSphereCD3, caption: "cd3" },
      ],
    },
    videoInteraction: {
      src: lumiSphereVideo,
      caption: "LumiSphere in action"
    },
    arduinoCode: `// LEDs and Button
const int R1 = 11;
const int G1 = 10;
const int BL1 = 9;
const int R2 = 6;
const int G2 = 5;
const int B2 = 3;
const int BTN = 4;

// Joystick
const int xPin = A0;
const int yPin = A1;
const int SW = 2;

// Center values for the joystick
int xCenter = 512;
int yCenter = 512;    
int deadzone = 50;    

float brightness;
bool neutral_position;
int mode;
int freeze;
int freezedHue = 0.0;
int freezedSaturation = 1.0;

int SW_state = HIGH;
int last_state = HIGH;

int BTN_state = HIGH;
int last_BTN_state = HIGH;

unsigned long lastDebounceTimeSW = 0;
unsigned long lastDebounceTimeBTN = 0;
unsigned long debounceDelay = 50;

unsigned long previousMillis = 0;
unsigned long fadeInterval = 500; // for fade/flash
unsigned long flashInterval = 20; // for fade/flash

// converts HSV to RGB
// Ref: https://www.rapidtables.com/convert/color/hsv-to-rgb.html
void hsvToRgb(float h, float s, float v, int &r, int &g, int &b) {
    float c = v * s;
    float x = c * (1 - abs(fmod((h / 60.0), 2) - 1));
    float m = v - c;

    float rPrime, gPrime, bPrime;

    if (h >= 0 && h < 60) {
        rPrime = c; gPrime = x; bPrime = 0;
    } else if (h >= 60 && h < 120) {
        rPrime = x; gPrime = c; bPrime = 0;
    } else if (h >= 120 && h < 180) {
        rPrime = 0; gPrime = c; bPrime = x;
    } else if (h >= 180 && h < 240) {
        rPrime = 0; gPrime = x; bPrime = c;
    } else if (h >= 240 && h < 300) {
        rPrime = x; gPrime = 0; bPrime = c;
    } else {
        rPrime = c; gPrime = 0; bPrime = x;
    }

    r = (rPrime + m) * 255;
    g = (gPrime + m) * 255;
    b = (bPrime + m) * 255;

    // constrains between 0 and 255
    r = constrain(r, 0, 255);
    g = constrain(g, 0, 255);
    b = constrain(b, 0, 255);
}

void setup() {
  pinMode(R1, OUTPUT);  
  pinMode(G1, OUTPUT);  
  pinMode(BL1, OUTPUT);  

  pinMode(R2, OUTPUT); 
  pinMode(G2, OUTPUT);  
  pinMode(B2, OUTPUT);  

  pinMode(BTN, INPUT);
  pinMode(SW, INPUT_PULLUP);

  brightness = 0.0;
  neutral_position = true;
  mode = 0;
  freeze = false;

  Serial.begin(9600);
  // delay to let joystick drift
  delay(3000);

  // neutral pos
  xCenter = analogRead(xPin);
  yCenter = analogRead(yPin);
}


void loop() {
  int xValue = analogRead(xPin);
  int yValue = analogRead(yPin);

  int adjustedX = xValue - xCenter;
  int adjustedY = yValue - yCenter;

  // adjust for deadzone
  if (abs(adjustedX) < deadzone) {
    adjustedX = 0;
  }
  if (abs(adjustedY) < deadzone) {
    adjustedY = 0;
  }

  // map joystick X-axis to Hue (0 to 360 degrees)
  float hue = map(adjustedX, -512, 512, 0, 360);

  // map joystick Y-axis to Saturation (0-1)
  float saturation = map(adjustedY, -512, 512, 0, 100) / 100.0;
  saturation = constrain(saturation, 0.0, 1.0);

  if (hue == 180.00 && saturation == 0.50) {
    neutral_position = true;
  }
  else {
    neutral_position = false;
  }

  // Push-button to contorl Brightness
  int btnReading = digitalRead(BTN);

  if (btnReading != last_BTN_state) {
    lastDebounceTimeBTN = millis();
  }

  if ((millis() - lastDebounceTimeBTN) > debounceDelay) {
    if (btnReading != BTN_state) {
      BTN_state = btnReading;

      if (BTN_state == LOW) {
        brightness += 0.1;
        if (brightness > 1.0) {
          brightness = 0.0;
        }
        Serial.print("Brightness: ");
        Serial.println(brightness);
      }
    }
  }
  last_BTN_state = btnReading;

  // read Joystick button
  int sw_reading = digitalRead(SW);
  if (sw_reading != last_state) {
    lastDebounceTimeSW = millis();
  }

  if ((millis() - lastDebounceTimeSW) > debounceDelay) {
    if (sw_reading != SW_state) {
      SW_state = sw_reading;

      if (SW_state == LOW) {
        if (neutral_position) {
          freeze = false;
        }
        else {
          freeze = true;
        }

        if (freeze) {
            freezedHue = hue;
            freezedSaturation = saturation;
            Serial.println("color frozen");
          }
          else {
            Serial.println("color unfrozen");
          }
      }
    }
  }
  last_state = sw_reading;

  // variables to store RGB values
  int r, g, b;

   unsigned long currentMillis = millis();


  if (!freeze) {
    hsvToRgb(hue, saturation, brightness, r, g, b);
  }
  else {
    hsvToRgb(freezedHue, freezedSaturation, brightness, r, g, b);
  }




  // write rgb values
  analogWrite(R1, r);
  analogWrite(G1, g);
  analogWrite(BL1, b);

  analogWrite(R2, r);
  analogWrite(G2, g);
  analogWrite(B2, b);

  Serial.print("Mode: ");
  Serial.print(mode);
  Serial.print(" | Brightness: ");
  Serial.println(brightness);


  delay(10);
}`,
    circuitSchematic: {
      src: lumiSphereSchematic,
      caption: "LumiSphere circuit schematic"
    },
    references: [
      "https://www.rapidtables.com/convert/color/hsv-to-rgb.html",
    ]
  },
  {
    cover: drumSenseImage,
    title: "AirBeats",
    description: "Portable, 3D printed drumsticks designed for convenience, allowing you to play drums anywhere, whether at home or on the go.",
    tech: ["Arduino Leonardo", "Arduino IDE", "C", "MIDI", "3D Printing", "IMU (MPU6050)"],
    github: "https://aarij00.github.io/aarij-portfolio/project.html?project=2",
    introduction: "AirBeats is a highly portable air drum system designed for convenience, allowing you to play or practice drums anywhere, whether at home or on the go. Using two MPU-6050 sensors, AirBeats accurately tracks stick movements and translates them into real-time drum sounds. It connects to MIDI interfaces, making it compatible with digital audio workstations, and even supports headphone use, so you can practice silently without disturbing others. AirBeats offers a seamless, immersive drumming experience, perfect for musicians looking for flexibility and mobility.", 
    conceptDevelopment: {
      images: [
        { src: drumSenseCD1, caption: "cd1" },
        { src: drumSenseCD2, caption: "cd2" },
        { src: drumSenseCD3, caption: "cd3" },
      ],
    },
    videoInteraction: {
      src: drumSenseVideo,
      caption: "AirBeats in action"
    },
    arduinoCode: `#include 
#include 
#include "MIDIUSB.h"

MPU6050 mpu1(0x68); 
MPU6050 mpu2(0x69); 

unsigned long prevTime1 = 0;
unsigned long prevTime2 = 0;

const int snareNote = 38;     
const int bassNote = 36;      
const int hi_hat = 42;     
const int crashNote = 49;     
const int velocity = 100;     
const float threshold = 1.50;
const float cymbalThreshold = 1.75;
bool notePlaying1 = false;
bool notePlaying2 = false;

float filteredX1 = 0.0, filteredY1 = 0.0, filteredZ1 = 0.0;
float filteredGyroX1 = 0.0, filteredGyroY1 = 0.0, filteredGyroZ1 = 0.0;
float filteredX2 = 0.0, filteredY2 = 0.0, filteredZ2 = 0.0;
float filteredGyroX2 = 0.0, filteredGyroY2 = 0.0, filteredGyroZ2 = 0.0;

void setup() {
  Serial.begin(9600);
  while (!Serial) {
    ;
  }
  Serial.println("Initializing MPU6050 sensors...");
  Wire.begin();

  mpu1.initialize();
  mpu2.initialize();

  if (!mpu1.testConnection()) {
    Serial.println("MPU6050-1 connection failed!");
    while (1)
      ;
  } else {
    Serial.println("MPU6050-1 connected successfully.");
  }

  if (!mpu2.testConnection()) {
    Serial.println("MPU6050-2 connection failed!");
    while (1)
      ;
  } else {
    Serial.println("MPU6050-2 connected successfully.");
  }
}

void loop() {
  int16_t ax1, ay1, az1;
  int16_t gx1, gy1, gz1;

  int16_t ax2, ay2, az2;
  int16_t gx2, gy2, gz2;

  mpu1.getAcceleration(&ax1, &ay1, &az1);
  mpu1.getRotation(&gx1, &gy1, &gz1);

  mpu2.getAcceleration(&ax2, &ay2, &az2);
  mpu2.getRotation(&gx2, &gy2, &gz2);

  float accelX1 = ax1 / 16384.0;
  float accelY1 = ay1 / 16384.0;
  float accelZ1 = az1 / 16384.0;

  float accelX2 = ax2 / 16384.0;
  float accelY2 = ay2 / 16384.0;
  float accelZ2 = az2 / 16384.0;

  float gyroX1 = gx1 / 131.0;
  float gyroY1 = gy1 / 131.0;
  float gyroZ1 = gz1 / 131.0;

  float gyroX2 = gx2 / 131.0;
  float gyroY2 = gy2 / 131.0;
  float gyroZ2 = gz2 / 131.0;

  filteredGyroX1 = abs(0.3 * gyroX1 + 0.7 * filteredGyroX1);
  filteredGyroY1 = abs(0.3 * gyroY1 + 0.7 * filteredGyroY1);
  filteredGyroZ1 = abs(0.3 * gyroZ1 + 0.7 * filteredGyroZ1);

  filteredX1 = abs(0.3 * accelX1 + 0.7 * filteredX1);
  filteredY1 = 0.3 * accelY1 + 0.7 * filteredY1;
  filteredZ1 = abs(0.3 * accelZ1 + 0.7 * filteredZ1);

  filteredGyroX2 = abs(0.3 * gyroX2 + 0.7 * filteredGyroX2);
  filteredGyroY2 = abs(0.3 * gyroY2 + 0.7 * filteredGyroY2);
  filteredGyroZ2 = abs(0.3 * gyroZ2 + 0.7 * filteredGyroZ2);

  filteredX2 = abs(0.3 * accelX2 + 0.7 * filteredX2);
  filteredY2 = 0.3 * accelY2 + 0.7 * filteredY2;
  filteredZ2 = abs(0.3 * accelZ2 + 0.7 * filteredZ2);

  float accelMagnitude1 = abs(filteredY1);

  float accelMagnitude2 = abs(filteredY2);

  unsigned long currentTime = millis();


  if (filteredX1 > 0.3 && abs(filteredGyroY1) > 180.0 && accelMagnitude1 > cymbalThreshold && !notePlaying1 && currentTime - prevTime1 > 175) {
    prevTime1 = currentTime;
    notePlaying1 = true;
    sendNoteOn(hi_hat, velocity); 
  } else if (accelMagnitude1 > threshold && abs(filteredGyroY1) < 100.0 && !notePlaying1 && currentTime - prevTime1 > 175) {
    prevTime1 = currentTime;
    notePlaying1 = true;
    sendNoteOn(snareNote, velocity);
  }


  if (filteredX2 > 0.3 && abs(filteredGyroY2) > 180.0 && accelMagnitude2 > cymbalThreshold && !notePlaying2 && currentTime - prevTime2 > 175) {
    prevTime2 = currentTime;
    notePlaying2 = true;
    sendNoteOn(crashNote, velocity);
  } else if (accelMagnitude2 > threshold && abs(filteredGyroY2) < 100.0 && !notePlaying2 && currentTime - prevTime2 > 175) {
    prevTime2 = currentTime;
    notePlaying2 = true;
    sendNoteOn(bassNote, velocity);
  }

  if (accelMagnitude1 < threshold && notePlaying1) {
    notePlaying1 = false;
    sendNoteOff(snareNote, 0);
    sendNoteOff(hi_hat, 0);
  }

  if (accelMagnitude2 < threshold && notePlaying2) {
    notePlaying2 = false;
    sendNoteOff(bassNote, 0);
    sendNoteOff(crashNote, 0);
  }
}

void sendNoteOn(byte pitch, byte velocity) {
  midiEventPacket_t noteOn = {0x09, 0x90, pitch, velocity};
  MidiUSB.sendMIDI(noteOn);
  MidiUSB.flush();
}

void sendNoteOff(byte pitch, byte velocity) {
  midiEventPacket_t noteOff = {0x08, 0x80, pitch, velocity};
  MidiUSB.sendMIDI(noteOff);
  MidiUSB.flush();
}`,
    circuitSchematic: {
      src: drumSenseSchematic,
      caption: "AirBeats circuit schematic"
    },
    references: [
      "https://howtomechatronics.com/tutorials/arduino/arduino-and-mpu6050-accelerometer-and-gyroscope-tutorial/#h-mpu6050-arduino-code",
      "https://www.youtube.com/watch?v=M9lZ5Qy5S2s"
    ]
  },
  {
    cover: pulseLinkImage,
    title: "PulseLink",
    description: "3D-printed bracelets that provide haptic feedback through a vibrating motor, fostering a sense of physical connection across distances.",
    tech: ["ESP 32", "ESP-NOW", "Arduino IDE", "C", "3D Printing", "Fusion 360"],
    github: "https://aarij00.github.io/aarij-portfolio/project.html?project=4",
    introduction: "PulseLink is an interactive wearable project featuring two 3D-printed bracelets equipped with ESP32 microcontrollers, vibration motors, and force sensors. Using ESP-NOW for wireless communication, the bracelets create a real-time connection between users. When one person touches the force sensor on their bracelet, the other person's bracelet provides haptic feedback through a vibrating motor, fostering a sense of physical connection across distances. PulseLink seamlessly blends hardware design, wireless communication, and user experience to enable intuitive, tactile interaction.", 
    conceptDevelopment: {
      images: [
        { src: pulseLinkCD1, caption: "cd1" },
        { src: pulseLinkCD2, caption: "cd2" },
        { src: pulseLinkCD3, caption: "cd3" },
      ],
    },
    videoInteraction: {
      src: pulseLinkVideo,
      caption: "PulseLink in action"
    },
    arduinoCode: `#include 
#include 

// Define pins
#define MOTOR_PIN SCK          // GPIO pin connected to the transistor base
#define FORCE_SENSOR_PIN A2  // Analog pin connected to the force sensor
const int threshold = 50;  // Adjust based on your sensor readings

uint8_t peerMAC[] = {0xcc, 0xdb, 0xa7, 0x32, 0x1a, 0x6c};
char message[250];


// Callback function to handle received messages
void onDataReceived(const esp_now_recv_info_t* recvInfo, const uint8_t* data, int dataLen) {
  Serial.print("Message received from: ");
  for (int i = 0; i < 6; i++) {
    Serial.printf("%02X", recvInfo->src_addr[i]);
    if (i < 5) Serial.print(":");
  }
  Serial.println();

  // Process the received data
  char message[dataLen + 1];
  memcpy(message, data, dataLen);
  message[dataLen] = '';  // Null-terminate the message

  Serial.printf("Message: %s
", message);
  if (strcmp(message, "ON") == 0) {
    digitalWrite(MOTOR_PIN, HIGH);
  }
  else if (strcmp(message, "OFF") == 0) {
    digitalWrite(MOTOR_PIN, LOW);
  }
}

// Callback function to handle message sending status
void onDataSent(const uint8_t* macAddr, esp_now_send_status_t status) {
  Serial.print("Last message sent to: ");
  for (int i = 0; i < 6; i++) {
    Serial.printf("%02X", macAddr[i]);
    if (i < 5) Serial.print(":");
  }
  Serial.print(" Status: ");
  Serial.println(status == ESP_NOW_SEND_SUCCESS ? "Success" : "Fail");
}




void setup() {
  Serial.begin(115200);
  // Set up the motor control pin
  pinMode(MOTOR_PIN, OUTPUT);
  digitalWrite(MOTOR_PIN, LOW);  // Ensure motor is off at startup

  // Initialize Wi-Fi in station mode
  WiFi.mode(WIFI_STA);
  Serial.println("Wi-Fi initialized in STA mode");

   // Initialize ESP-NOW
  if (esp_now_init() != ESP_OK) {
    Serial.println("ESP-NOW initialization failed!");
    return;
  }
  Serial.println("ESP-NOW initialized");

  // Register callback functions
  esp_now_register_recv_cb(onDataReceived);
  esp_now_register_send_cb(onDataSent);

  // Register the peer
  esp_now_peer_info_t peerInfo;
  esp_now_del_peer(peerMAC);
  memcpy(peerInfo.peer_addr, peerMAC, 6);
  peerInfo.channel = WiFi.channel();  // Use default Wi-Fi channel
  peerInfo.encrypt = false;
  peerInfo.ifidx = WIFI_IF_STA;
  if (esp_now_add_peer(&peerInfo) != ESP_OK) {
    Serial.println("Failed to add peer");
    return;
  }
  Serial.println("Peer added");

}

void loop() {
  Serial.println(WiFi.macAddress());
  // Serial.println(WiFi.macAddress());
  // Read the analog value from the force sensor
  int sensorValue = analogRead(FORCE_SENSOR_PIN);

  // Check if the sensor value exceeds the threshold
  if (sensorValue > threshold) {
    const char* message = "ON";
    esp_err_t result = esp_now_send(peerMAC, (uint8_t*)message, strlen(message));

    if (result == ESP_OK) {
      Serial.println("Message sent successfully");
    } else {
      Serial.println("Error sending message");
    }
  } 
  else {
    const char* message = "OFF";
    esp_err_t result = esp_now_send(peerMAC, (uint8_t*)message, strlen(message));

    if (result == ESP_OK) {
      Serial.println("Message sent successfully");
    } else {
      Serial.println("Error sending message");
    }
  }

  delay(250);
}`,
    circuitSchematic: {
      src: pulseLinkSchematic,
      caption: "PulseLink circuit schematic"
    },
    references: [
      "https://www.youtube.com/watch?v=3hoBwa0ccys",
      "https://randomnerdtutorials.com/esp-now-esp32-arduino-ide/"
    ]
  },
  
];
