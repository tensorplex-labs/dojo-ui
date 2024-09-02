import { Task } from '@/types/QuestionPageTypes';

export type TaskType = 'CODE_GENERATION' | '3D_MODEL';

// Demo data for codes
export const task3d: Task = {
  taskId: 'demo4-3d',
  title: 'LLM 3D Model Task (Demo)',
  body: 'Generate an image of a green dog.',
  expireAt: '2099-12-03T15:04:00Z',
  type: '3D_MODEL',
  taskData: {
    task: '3D_MODEL',
    prompt: 'Generate an image of a green dog.',
    criteria: [
      {
        max: 100,
        min: 1,
        type: 'multi-score',
        options: ['stabilityai/stable-diffusion-xl-base-1.0', 'runwayml/stable-diffusion-v1-5'],
      },
    ],
    responses: [
      {
        model: 'stabilityai/stable-diffusion-xl-base-1.0',
        completion: { url: 'https://dojo-files-dev.tensorplex.dev/donald_duck.ply' },
      },
      {
        model: 'runwayml/stable-diffusion-v1-5',
        completion: {
          url: 'https://dojo-files-dev.tensorplex.dev/miniature_godzilla_with_a_blue_skin_and_a_green_face.ply',
        },
      },
    ],
  },
  status: 'IN_PROGRESS',
  maxResults: 10,
  numResults: 9,
  numCriteria: 4,
  isCompletedByWorker: false,
};

export const tasklistCodegen: Task[] = [
  {
    taskId: 'demo0',
    title: 'LLM Code Generation Task (Demo)',
    body: "Create a web application using only HTML, CSS, and JavaScript that visualizes a clock. The clock should display the current time and update every second. The user should be able to interact with the clock in the following ways: 1. Start or stop the clock's time progression. 2. Switch between a 12-hour and a 24-hour display format. 3. Change the color of the clock's hands. 4. Toggle the visibility of the second hand. Ensure that the clock is visually appealing and accurately represents the current time. The user interactions should be intuitive and provide immediate feedback. No external libraries are allowed; use only built-in JavaScript functions.\nNote:\n- The visualization should be implemented in JavaScript with HTML and CSS.\n- Ensure that the output has both index.js and index.html files\n",
    expireAt: '2099-08-30T14:09:13Z',
    type: 'CODE_GENERATION',
    taskData: {
      task: 'CODE_GENERATION',
      prompt:
        "Create a web application using only HTML, CSS, and JavaScript that visualizes a clock. The clock should display the current time and update every second. The user should be able to interact with the clock in the following ways: 1. Start or stop the clock's time progression. 2. Switch between a 12-hour and a 24-hour display format. 3. Change the color of the clock's hands. 4. Toggle the visibility of the second hand. Ensure that the clock is visually appealing and accurately represents the current time. The user interactions should be intuitive and provide immediate feedback. No external libraries are allowed; use only built-in JavaScript functions.\nNote:\n- The visualization should be implemented in JavaScript with HTML and CSS.\n- Ensure that the output has both index.js and index.html files\n",
      criteria: [
        {
          max: 100,
          min: 1,
          type: 'multi-score',
          options: [
            'anthropic/claude-3-haiku-20240307',
            'openai/gpt-4-turbo-2024-04-09',
            'anthropic/claude-3-opus-20240229',
            'openai/gpt-4o',
          ],
        },
      ],
      responses: [
        {
          model: 'anthropic/claude-3-haiku-20240307',
          completion: {
            files: {
              'index.js': {
                content:
                  "const hourHand = document.getElementById('hour-hand');\nconst minuteHand = document.getElementById('minute-hand');\nconst secondHand = document.getElementById('second-hand');\nconst startStopBtn = document.getElementById('start-stop');\nconst formatToggleBtn = document.getElementById('format-toggle');\nconst colorChangeBtn = document.getElementById('color-change');\nconst secondToggleBtn = document.getElementById('second-toggle');\n\nlet isRunning = true;\nlet is24Hour = false;\nlet handColor = '#333';\nlet showSecondHand = true;\n\nfunction updateClock() {\n    const now = new Date();\n    let hours = now.getHours();\n    const minutes = now.getMinutes();\n    const seconds = now.getSeconds();\n\n    if (!is24Hour) {\n        hours = hours % 12 || 12;\n    }\n\n    const hourDegrees = (hours * 30) + (minutes * 0.5);\n    const minuteDegrees = (minutes * 6) + (seconds * 0.1);\n    const secondDegrees = seconds * 6;\n\n    hourHand.style.transform = `rotate(${hourDegrees}deg)`;\n    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;\n    secondHand.style.transform = `rotate(${secondDegrees}deg)`;\n\n    secondHand.style.display = showSecondHand ? 'block' : 'none';\n    hourHand.style.backgroundColor = minuteHand.style.backgroundColor = secondHand.style.backgroundColor = handColor;\n}\n\nfunction startStopClock() {\n    isRunning = !isRunning;\n    startStopBtn.textContent = isRunning ? 'Stop' : 'Start';\n    if (isRunning) {\n        updateClock();\n        setInterval(updateClock, 1000);\n    }\n}\n\nfunction toggleFormat() {\n    is24Hour = !is24Hour;\n    formatToggleBtn.textContent = is24Hour ? '24 Hour' : '12 Hour';\n}\n\nfunction changeColor() {\n    handColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;\n}\n\nfunction toggleSecondHand() {\n    showSecondHand = !showSecondHand;\n    secondToggleBtn.textContent = showSecondHand ? 'Hide Second Hand' : 'Show Second Hand';\n}\n\nstartStopBtn.addEventListener('click', startStopClock);\nformatToggleBtn.addEventListener('click', toggleFormat);\ncolorChangeBtn.addEventListener('click', changeColor);\nsecondToggleBtn.addEventListener('click', toggleSecondHand);\n\nupdateClock();\nsetInterval(updateClock, 1000);",
              },
              'index.html': {
                content:
                  '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003eClock Visualization\u003c/title\u003e\n    \u003cstyle\u003e\n        body {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 100vh;\n            margin: 0;\n            background-color: #f0f0f0;\n        }\n\n        #clock {\n            width: 300px;\n            height: 300px;\n            border: 2px solid #333;\n            border-radius: 50%;\n            position: relative;\n        }\n\n        #clock-face {\n            width: 100%;\n            height: 100%;\n            position: relative;\n        }\n\n        .hand {\n            position: absolute;\n            left: 50%;\n            bottom: 50%;\n            background-color: #333;\n            transform-origin: bottom center;\n            transition: transform 0.5s ease-in-out;\n        }\n\n        .hour-hand {\n            width: 8px;\n            height: 80px;\n            margin-left: -4px;\n        }\n\n        .minute-hand {\n            width: 6px;\n            height: 100px;\n            margin-left: -3px;\n        }\n\n        .second-hand {\n            width: 4px;\n            height: 120px;\n            margin-left: -2px;\n            background-color: #f00;\n        }\n\n        .controls {\n            margin-top: 20px;\n            text-align: center;\n        }\n\n        .controls button {\n            margin: 0 10px;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv id="clock"\u003e\n        \u003cdiv id="clock-face"\u003e\n            \u003cdiv class="hand hour-hand" id="hour-hand"\u003e\u003c/div\u003e\n            \u003cdiv class="hand minute-hand" id="minute-hand"\u003e\u003c/div\u003e\n            \u003cdiv class="hand second-hand" id="second-hand"\u003e\u003c/div\u003e\n        \u003c/div\u003e\n    \u003c/div\u003e\n    \u003cdiv class="controls"\u003e\n        \u003cbutton id="start-stop"\u003eStart/Stop\u003c/button\u003e\n        \u003cbutton id="format-toggle"\u003e12/24 Hour\u003c/button\u003e\n        \u003cbutton id="color-change"\u003eChange Color\u003c/button\u003e\n        \u003cbutton id="second-toggle"\u003eToggle Second Hand\u003c/button\u003e\n    \u003c/div\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
              },
              'package.json': {
                content: {
                  name: 'javascript',
                  scripts: {
                    build: 'parcel build ./index.html',
                    start: 'parcel ./index.html',
                  },
                  version: '1.0.0',
                  keywords: ['css', 'javascript'],
                  description: 'The JavaScript template',
                  devDependencies: {
                    eslint: '^7.2.0',
                    parcel: '^2.0.0',
                    'babel-eslint': '^10.1.0',
                  },
                },
              },
            },
            environment: 'server',
            sandbox_url: 'https://pmsd2c.csb.app/',
            combined_html:
              '\u003c!DOCTYPE html\u003e\n\u003chtml\u003e\n\u003chead\u003e\n\u003ctitle\u003eThree.js Interactive Cubes\u003c/title\u003e\n\u003cstyle\u003e\nbody { margin: 0; overflow: hidden; font-family: Arial, sans-serif; }\ncanvas { display: block; }\n#controls { position: absolute; top: 10px; left: 10px; color: white; z-index: 10; }\nlabel { margin-right: 10px; }\n\u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n\u003cdiv id=\u0022controls\u0022\u003e\n  \u003clabel\u003eCubes: \u003c/label\u003e\u003cinput id=\u0022cubeCountSlider\u0022 type=\u0022range\u0022 min=\u00221\u0022 max=\u0022100\u0022 value=\u002250\u0022\u003e\n  \u003clabel\u003eCamera Angle: \u003c/label\u003e\u003cinput id=\u0022cameraAngleSlider\u0022 type=\u0022range\u0022 min=\u00220\u0022 max=\u0022360\u0022 value=\u002275\u0022\u003e\n\u003c/div\u003e\n\u003cscript src=\u0022https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\u0022\u003e\u003c/script\u003e\n\u003cscript\u003e\nlet scene, camera, renderer, cubes = [], cubeCount = 50;\nconst init = () => {\n  scene = new THREE.Scene();\n  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n  camera.position.z = 10;\n  renderer = new THREE.WebGLRenderer({ antialias: true });\n  renderer.setSize(window.innerWidth, window.innerHeight);\n  document.body.appendChild(renderer.domElement);\n  addCubes(cubeCount);\n  const ambientLight = new THREE.AmbientLight(0x404040, 2);\n  scene.add(ambientLight);\n  const pointLight = new THREE.PointLight(0xffffff, 1, 100);\n  pointLight.position.set(0, 0, 10);\n  scene.add(pointLight);\n  document.getElementById(\u0022cubeCountSlider\u0022).addEventListener(\u0022input\u0022, updateCubeCount);\n  document.getElementById(\u0022cameraAngleSlider\u0022).addEventListener(\u0022input\u0022, updateCameraAngle);\n  animate();\n}\nconst addCubes = (count) => {\n  removeCubes();\n  for (let i = 0; i \u003c count; i++) {\n    const geometry = new THREE.BoxGeometry(1, 1, 1);\n    const material = new THREE.MeshStandardMaterial({ color: Math.random() * 0xffffff });\n    const cube = new THREE.Mesh(geometry, material);\n    cube.position.x = (Math.random() - 0.5) * 20;\n    cube.position.y = (Math.random() - 0.5) * 20;\n    cube.position.z = Math.random() * -50 - 5;\n    cube.rotationSpeedX = (Math.random() - 0.5) * 0.02;\n    cube.rotationSpeedY = (Math.random() - 0.5) * 0.02;\n    cube.movementSpeedZ = Math.random() * 0.2 + 0.1;\n    scene.add(cube);\n    cubes.push(cube);\n  }\n}\nconst removeCubes = () => {\n  cubes.forEach(cube => scene.remove(cube));\n  cubes = [];\n}\nconst updateCubeCount = (event) => {\n  cubeCount = parseInt(event.target.value);\n  addCubes(cubeCount);\n}\nconst updateCameraAngle = (event) => {\n  const angle = parseInt(event.target.value);\n  camera.position.x = 10 * Math.sin(THREE.MathUtils.degToRad(angle));\n  camera.position.z = 10 * Math.cos(THREE.MathUtils.degToRad(angle));\n  camera.lookAt(0, 0, 0);\n}\nconst animate = () => {\n  requestAnimationFrame(animate);\n  cubes.forEach(cube => {\n    cube.rotation.x += cube.rotationSpeedX;\n    cube.rotation.y += cube.rotationSpeedY;\n    cube.position.z += cube.movementSpeedZ;\n    if (cube.position.z > 10) cube.position.z = -50;\n  });\n  renderer.render(scene, camera);\n}\ninit();\n\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
            additional_notes:
              'This solution uses only built-in JavaScript functions and does not require any external libraries. The HTML and CSS provide the structure and styling for the clock visualization, while the JavaScript handles the clock logic, user interactions, and updates the clock display accordingly.',
            installation_commands: 'null',
          },
        },
        {
          model: 'openai/gpt-4-turbo-2024-04-09',
          completion: {
            files: {
              'index.js': {
                content:
                  "const clockContainer = document.getElementById('clock');\nconst toggleButton = document.getElementById('toggleButton');\nconst formatButton = document.getElementById('formatButton');\nconst colorPicker = document.getElementById('colorPicker');\nconst secondHandCheckbox = document.getElementById('secondHandCheckbox');\n\nlet isRunning = true;\nlet use24HourFormat = false;\nlet interval = null;\n\nfunction updateClock() {\n  const now = new Date();\n  const hours = use24HourFormat ? now.getHours() : now.getHours() % 12 || 12;\n  const minutes = now.getMinutes();\n  const seconds = now.getSeconds();\n  clockContainer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;\n}\n\nfunction toggleClock() {\n  if (isRunning) {\n    clearInterval(interval);\n    interval = null;\n  } else {\n    interval = setInterval(updateClock, 1000);\n  }\n  isRunning = !isRunning;\n}\n\ntoggleButton.addEventListener('click', toggleClock);\nformatButton.addEventListener('click', () =\u003e {\n  use24HourFormat = !use24HourFormat;\n  updateClock();\n});\ncolorPicker.addEventListener('change', (event) =\u003e {\n  clockContainer.style.color = event.target.value;\n});\nsecondHandCheckbox.addEventListener('change', (event) =\u003e {\n  clockContainer.style.display = event.target.checked ? 'block' : 'none';\n});\n\nupdateClock();\ninterval = setInterval(updateClock, 1000);",
              },
              'index.html': {
                content:
                  "\u003c!DOCTYPE html\u003e\n\u003chtml lang='en'\u003e\n\u003chead\u003e\n    \u003cmeta charset='UTF-8'\u003e\n    \u003cmeta name='viewport' content='width=device-width, initial-scale=1.0'\u003e\n    \u003ctitle\u003eClock Visualization\u003c/title\u003e\n    \u003cstyle\u003e\n        #clock {\n            font-size: 48px;\n            color: black;\n            font-family: 'Arial', sans-serif;\n            text-align: center;\n            margin-top: 20px;\n        }\n        #controls {\n            text-align: center;\n            margin-top: 20px;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv id='clock'\u003e\u003c/div\u003e\n    \u003cdiv id='controls'\u003e\n        \u003cbutton id='toggleButton'\u003eToggle Clock\u003c/button\u003e\n        \u003cbutton id='formatButton'\u003eToggle Format\u003c/button\u003e\n        \u003cinput type='color' id='colorPicker'\u003e\n        \u003clabel\u003e\n            \u003cinput type='checkbox' id='secondHandCheckbox' checked\u003eShow Seconds\n        \u003c/label\u003e\n    \u003c/div\u003e\n    \u003cscript src='index.js'\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e",
              },
              'package.json': {
                content: {
                  name: 'javascript',
                  scripts: {
                    build: 'parcel build ./index.html',
                    start: 'parcel ./index.html',
                  },
                  version: '1.0.0',
                  keywords: ['css', 'javascript'],
                  description: 'The JavaScript template',
                  devDependencies: {
                    eslint: '^7.2.0',
                    parcel: '^2.0.0',
                    'babel-eslint': '^10.1.0',
                  },
                },
              },
            },
            environment: 'server',
            sandbox_url: 'https://g3xn6h.csb.app/',
            combined_html:
              "\u003c!DOCTYPE html\u003e\n\u003chtml lang='en'\u003e\n\u003chead\u003e\n    \u003cmeta charset='UTF-8'\u003e\n    \u003cmeta name='viewport' content='width=device-width, initial-scale=1.0'\u003e\n    \u003ctitle\u003eClock Visualization\u003c/title\u003e\n    \u003cstyle\u003e\n        #clock {\n            font-size: 48px;\n            color: black;\n            font-family: 'Arial', sans-serif;\n            text-align: center;\n            margin-top: 20px;\n        }\n        #controls {\n            text-align: center;\n            margin-top: 20px;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv id='clock'\u003e\u003c/div\u003e\n    \u003cdiv id='controls'\u003e\n        \u003cbutton id='toggleButton'\u003eToggle Clock\u003c/button\u003e\n        \u003cbutton id='formatButton'\u003eToggle Format\u003c/button\u003e\n        \u003cinput type='color' id='colorPicker'\u003e\n        \u003clabel\u003e\n            \u003cinput type='checkbox' id='secondHandCheckbox' checked\u003eShow Seconds\n        \u003c/label\u003e\n    \u003c/div\u003e\n    \u003cscript src='index.js'\u003e\u003c/script\u003e\n\u003cscript\u003econst clockContainer = document.getElementById('clock');\nconst toggleButton = document.getElementById('toggleButton');\nconst formatButton = document.getElementById('formatButton');\nconst colorPicker = document.getElementById('colorPicker');\nconst secondHandCheckbox = document.getElementById('secondHandCheckbox');\n\nlet isRunning = true;\nlet use24HourFormat = false;\nlet interval = null;\n\nfunction updateClock() {\n  const now = new Date();\n  const hours = use24HourFormat ? now.getHours() : now.getHours() % 12 || 12;\n  const minutes = now.getMinutes();\n  const seconds = now.getSeconds();\n  clockContainer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;\n}\n\nfunction toggleClock() {\n  if (isRunning) {\n    clearInterval(interval);\n    interval = null;\n  } else {\n    interval = setInterval(updateClock, 1000);\n  }\n  isRunning = !isRunning;\n}\n\ntoggleButton.addEventListener('click', toggleClock);\nformatButton.addEventListener('click', () =\u003e {\n  use24HourFormat = !use24HourFormat;\n  updateClock();\n});\ncolorPicker.addEventListener('change', (event) =\u003e {\n  clockContainer.style.color = event.target.value;\n});\nsecondHandCheckbox.addEventListener('change', (event) =\u003e {\n  clockContainer.style.display = event.target.checked ? 'block' : 'none';\n});\n\nupdateClock();\ninterval = setInterval(updateClock, 1000);\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e",
            additional_notes:
              'The code uses built-in browser functionalities and does not require any external libraries or installation commands.',
            installation_commands: 'null',
          },
        },
        {
          model: 'anthropic/claude-3-opus-20240229',
          completion: {
            files: {
              'index.js': {
                content:
                  "const hourHand = document.querySelector('.hour-hand');\nconst minuteHand = document.querySelector('.minute-hand');\nconst secondHand = document.querySelector('.second-hand');\nconst timeElement = document.querySelector('.time');\n\nconst startStopBtn = document.getElementById('startStopBtn');\nconst formatBtn = document.getElementById('formatBtn');\nconst colorPicker = document.getElementById('colorPicker');\nconst secondHandBtn = document.getElementById('secondHandBtn');\n\nlet running = true;\nlet format = '12';\n\nfunction setTime() {\n  const now = new Date();\n  \n  const hours = now.getHours();\n  const minutes = now.getMinutes();\n  const seconds = now.getSeconds();\n  \n  const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;\n  const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;\n  const secondsDegrees = (seconds / 60) * 360 + 90;\n  \n  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;\n  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;\n  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;\n  \n  let displayHours = hours;\n  let ampm = '';\n  \n  if (format === '12') {\n    displayHours = hours % 12 || 12;\n    ampm = hours \u003c 12 ? 'AM' : 'PM';\n  }\n  \n  const formattedTime = `${displayHours}:${minutes \u003c 10 ? '0' : ''}${minutes}:${seconds \u003c 10 ? '0' : ''}${seconds} ${ampm}`;\n  timeElement.textContent = formattedTime;\n}\n\nfunction toggleClock() {\n  running = !running;\n}\n\nfunction toggleFormat() {\n  format = format === '12' ? '24' : '12';\n}\n\nfunction changeColor(color) {\n  hourHand.style.backgroundColor = color;\n  minuteHand.style.backgroundColor = color;\n}\n\nfunction toggleSecondHand() {\n  secondHand.style.display = secondHand.style.display === 'none' ? 'block' : 'none';\n}\n\nstartStopBtn.addEventListener('click', toggleClock);\nformatBtn.addEventListener('click', toggleFormat);\ncolorPicker.addEventListener('input', (event) =\u003e changeColor(event.target.value));\nsecondHandBtn.addEventListener('click', toggleSecondHand);\n\nsetInterval(() =\u003e {\n  if (running) {\n    setTime();\n  }\n}, 1000);\n\nsetTime();",
              },
              'index.html': {
                content:
                  '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n  \u003cmeta charset="UTF-8"\u003e\n  \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n  \u003ctitle\u003eClock Visualization\u003c/title\u003e\n  \u003cstyle\u003e\n    body {\n      font-family: Arial, sans-serif;\n      text-align: center;\n    }\n    \n    .clock {\n      width: 300px;\n      height: 300px;\n      border-radius: 50%;\n      border: 2px solid black;\n      margin: 50px auto;\n      position: relative;\n    }\n    \n    .hand {\n      position: absolute;\n      left: 50%;\n      width: 50%;\n      height: 6px;\n      transform-origin: 100%;\n      transform: rotate(90deg);\n      transition: all 0.05s;\n      transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);\n    }\n    \n    .hour-hand {\n      background-color: black;\n      height: 8px;\n    }\n    \n    .minute-hand {\n      background-color: black;\n    }\n    \n    .second-hand {\n      background-color: red;\n      height: 4px;\n    }\n    \n    .center-circle {\n      background-color: black;\n      width: 10px;\n      height: 10px;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      margin-top: -5px;\n      margin-left: -5px;\n      border-radius: 50%;\n    }\n    \n    .time {\n      font-size: 24px;\n      margin-top: 20px;\n    }\n    \n    .controls {\n      margin-top: 20px;\n    }\n  \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n  \u003cdiv class="clock"\u003e\n    \u003cdiv class="hand hour-hand"\u003e\u003c/div\u003e\n    \u003cdiv class="hand minute-hand"\u003e\u003c/div\u003e\n    \u003cdiv class="hand second-hand"\u003e\u003c/div\u003e\n    \u003cdiv class="center-circle"\u003e\u003c/div\u003e\n  \u003c/div\u003e\n  \n  \u003cdiv class="time"\u003e\u003c/div\u003e\n  \n  \u003cdiv class="controls"\u003e\n    \u003cbutton id="startStopBtn"\u003eStart/Stop\u003c/button\u003e\n    \u003cbutton id="formatBtn"\u003e12/24 Hour\u003c/button\u003e\n    \u003cinput type="color" id="colorPicker"\u003e\n    \u003cbutton id="secondHandBtn"\u003eToggle Second Hand\u003c/button\u003e\n  \u003c/div\u003e\n  \n  \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
              },
              'package.json': {
                content: {
                  name: 'javascript',
                  scripts: {
                    build: 'parcel build ./index.html',
                    start: 'parcel ./index.html',
                  },
                  version: '1.0.0',
                  keywords: ['css', 'javascript'],
                  description: 'The JavaScript template',
                  devDependencies: {
                    eslint: '^7.2.0',
                    parcel: '^2.0.0',
                    'babel-eslint': '^10.1.0',
                  },
                },
              },
            },
            environment: 'server',
            sandbox_url: 'https://6hztv8.csb.app/',
            combined_html:
              "\u003c!DOCTYPE html\u003e\n\u003chtml lang=\"en\"\u003e\n\u003chead\u003e\n  \u003cmeta charset=\"UTF-8\"\u003e\n  \u003cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003e\n  \u003ctitle\u003eClock Visualization\u003c/title\u003e\n  \u003cstyle\u003e\n    body {\n      font-family: Arial, sans-serif;\n      text-align: center;\n    }\n    \n    .clock {\n      width: 300px;\n      height: 300px;\n      border-radius: 50%;\n      border: 2px solid black;\n      margin: 50px auto;\n      position: relative;\n    }\n    \n    .hand {\n      position: absolute;\n      left: 50%;\n      width: 50%;\n      height: 6px;\n      transform-origin: 100%;\n      transform: rotate(90deg);\n      transition: all 0.05s;\n      transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);\n    }\n    \n    .hour-hand {\n      background-color: black;\n      height: 8px;\n    }\n    \n    .minute-hand {\n      background-color: black;\n    }\n    \n    .second-hand {\n      background-color: red;\n      height: 4px;\n    }\n    \n    .center-circle {\n      background-color: black;\n      width: 10px;\n      height: 10px;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      margin-top: -5px;\n      margin-left: -5px;\n      border-radius: 50%;\n    }\n    \n    .time {\n      font-size: 24px;\n      margin-top: 20px;\n    }\n    \n    .controls {\n      margin-top: 20px;\n    }\n  \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n  \u003cdiv class=\"clock\"\u003e\n    \u003cdiv class=\"hand hour-hand\"\u003e\u003c/div\u003e\n    \u003cdiv class=\"hand minute-hand\"\u003e\u003c/div\u003e\n    \u003cdiv class=\"hand second-hand\"\u003e\u003c/div\u003e\n    \u003cdiv class=\"center-circle\"\u003e\u003c/div\u003e\n  \u003c/div\u003e\n  \n  \u003cdiv class=\"time\"\u003e\u003c/div\u003e\n  \n  \u003cdiv class=\"controls\"\u003e\n    \u003cbutton id=\"startStopBtn\"\u003eStart/Stop\u003c/button\u003e\n    \u003cbutton id=\"formatBtn\"\u003e12/24 Hour\u003c/button\u003e\n    \u003cinput type=\"color\" id=\"colorPicker\"\u003e\n    \u003cbutton id=\"secondHandBtn\"\u003eToggle Second Hand\u003c/button\u003e\n  \u003c/div\u003e\n  \n  \u003cscript src=\"index.js\"\u003e\u003c/script\u003e\n\u003cscript\u003econst hourHand = document.querySelector('.hour-hand');\nconst minuteHand = document.querySelector('.minute-hand');\nconst secondHand = document.querySelector('.second-hand');\nconst timeElement = document.querySelector('.time');\n\nconst startStopBtn = document.getElementById('startStopBtn');\nconst formatBtn = document.getElementById('formatBtn');\nconst colorPicker = document.getElementById('colorPicker');\nconst secondHandBtn = document.getElementById('secondHandBtn');\n\nlet running = true;\nlet format = '12';\n\nfunction setTime() {\n  const now = new Date();\n  \n  const hours = now.getHours();\n  const minutes = now.getMinutes();\n  const seconds = now.getSeconds();\n  \n  const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;\n  const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;\n  const secondsDegrees = (seconds / 60) * 360 + 90;\n  \n  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;\n  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;\n  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;\n  \n  let displayHours = hours;\n  let ampm = '';\n  \n  if (format === '12') {\n    displayHours = hours % 12 || 12;\n    ampm = hours \u003c 12 ? 'AM' : 'PM';\n  }\n  \n  const formattedTime = `${displayHours}:${minutes \u003c 10 ? '0' : ''}${minutes}:${seconds \u003c 10 ? '0' : ''}${seconds} ${ampm}`;\n  timeElement.textContent = formattedTime;\n}\n\nfunction toggleClock() {\n  running = !running;\n}\n\nfunction toggleFormat() {\n  format = format === '12' ? '24' : '12';\n}\n\nfunction changeColor(color) {\n  hourHand.style.backgroundColor = color;\n  minuteHand.style.backgroundColor = color;\n}\n\nfunction toggleSecondHand() {\n  secondHand.style.display = secondHand.style.display === 'none' ? 'block' : 'none';\n}\n\nstartStopBtn.addEventListener('click', toggleClock);\nformatBtn.addEventListener('click', toggleFormat);\ncolorPicker.addEventListener('input', (event) =\u003e changeColor(event.target.value));\nsecondHandBtn.addEventListener('click', toggleSecondHand);\n\nsetInterval(() =\u003e {\n  if (running) {\n    setTime();\n  }\n}, 1000);\n\nsetTime();\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e",
            additional_notes:
              "This web application visualizes a clock using HTML, CSS, and JavaScript. It displays the current time and updates every second. The user can start/stop the clock, switch between 12-hour and 24-hour formats, change the color of the clock hands, and toggle the visibility of the second hand. The clock is implemented using JavaScript's built-in Date object and CSS transforms for the clock hands. No external libraries are used.",
            installation_commands: '',
          },
        },
        {
          model: 'openai/gpt-4o',
          completion: {
            files: {
              'index.js': {
                content:
                  "let isRunning = false;\nlet is24HourFormat = false;\nlet showSecondHand = true;\nlet intervalId;\nconst hourHand = document.getElementById('hour-hand');\nconst minuteHand = document.getElementById('minute-hand');\nconst secondHand = document.getElementById('second-hand');\nconst startStopButton = document.getElementById('start-stop');\nconst toggleFormatButton = document.getElementById('toggle-format');\nconst changeColorButton = document.getElementById('change-color');\nconst toggleSecondHandButton = document.getElementById('toggle-second-hand');\n\nfunction updateClock() {\n    const now = new Date();\n    let hours = now.getHours();\n    const minutes = now.getMinutes();\n    const seconds = now.getSeconds();\n    if (!is24HourFormat) {\n        hours = hours % 12 || 12;\n    }\n    const hourDeg = (hours % 12) * 30 + minutes * 0.5;\n    const minuteDeg = minutes * 6;\n    const secondDeg = seconds * 6;\n    hourHand.style.transform = `rotate(${hourDeg}deg)`;\n    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;\n    secondHand.style.transform = `rotate(${secondDeg}deg)`;\n}\n\nfunction startClock() {\n    if (!isRunning) {\n        intervalId = setInterval(updateClock, 1000);\n        isRunning = true;\n        startStopButton.textContent = 'Stop';\n    }\n}\n\nfunction stopClock() {\n    if (isRunning) {\n        clearInterval(intervalId);\n        isRunning = false;\n        startStopButton.textContent = 'Start';\n    }\n}\n\nfunction toggleClock() {\n    if (isRunning) {\n        stopClock();\n    } else {\n        startClock();\n    }\n}\n\nfunction toggleFormat() {\n    is24HourFormat = !is24HourFormat;\n    toggleFormatButton.textContent = is24HourFormat ? 'Switch to 12-hour' : 'Switch to 24-hour';\n    updateClock();\n}\n\nfunction changeColor() {\n    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;\n    hourHand.style.background = randomColor;\n    minuteHand.style.background = randomColor;\n    if (showSecondHand) {\n        secondHand.style.background = randomColor;\n    }\n}\n\nfunction toggleSecondHand() {\n    showSecondHand = !showSecondHand;\n    secondHand.style.display = showSecondHand ? 'block' : 'none';\n    toggleSecondHandButton.textContent = showSecondHand ? 'Hide Second Hand' : 'Show Second Hand';\n}\n\nstartStopButton.addEventListener('click', toggleClock);\ntoggleFormatButton.addEventListener('click', toggleFormat);\nchangeColorButton.addEventListener('click', changeColor);\ntoggleSecondHandButton.addEventListener('click', toggleSecondHand);\n\nupdateClock();\nstartClock();",
              },
              'index.html': {
                content:
                  '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003eClock Visualization\u003c/title\u003e\n    \u003cstyle\u003e\n        body { display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f0f0f0; }\n        #clock { position: relative; width: 200px; height: 200px; border: 5px solid #333; border-radius: 50%; background: white; }\n        .hand { position: absolute; width: 50%; height: 2px; background: black; top: 50%; transform-origin: 100%; transform: rotate(90deg); }\n        #second-hand { background: red; }\n        #controls { margin-top: 20px; text-align: center; }\n        button { margin: 5px; }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv id="clock"\u003e\n        \u003cdiv id="hour-hand" class="hand"\u003e\u003c/div\u003e\n        \u003cdiv id="minute-hand" class="hand"\u003e\u003c/div\u003e\n        \u003cdiv id="second-hand" class="hand"\u003e\u003c/div\u003e\n    \u003c/div\u003e\n    \u003cdiv id="controls"\u003e\n        \u003cbutton id="start-stop"\u003eStart\u003c/button\u003e\n        \u003cbutton id="toggle-format"\u003eSwitch to 24-hour\u003c/button\u003e\n        \u003cbutton id="change-color"\u003eChange Color\u003c/button\u003e\n        \u003cbutton id="toggle-second-hand"\u003eHide Second Hand\u003c/button\u003e\n    \u003c/div\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
              },
              'package.json': {
                content: {
                  name: 'javascript',
                  scripts: {
                    build: 'parcel build ./index.html',
                    start: 'parcel ./index.html',
                  },
                  version: '1.0.0',
                  keywords: ['css', 'javascript'],
                  description: 'The JavaScript template',
                  devDependencies: {
                    eslint: '^7.2.0',
                    parcel: '^2.0.0',
                    'babel-eslint': '^10.1.0',
                  },
                },
              },
            },
            environment: 'server',
            sandbox_url: 'https://3jgm9v.csb.app/',
            combined_html:
              "\u003c!DOCTYPE html\u003e\n\u003chtml lang=\"en\"\u003e\n\u003chead\u003e\n    \u003cmeta charset=\"UTF-8\"\u003e\n    \u003cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003e\n    \u003ctitle\u003eClock Visualization\u003c/title\u003e\n    \u003cstyle\u003e\n        body { display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f0f0f0; }\n        #clock { position: relative; width: 200px; height: 200px; border: 5px solid #333; border-radius: 50%; background: white; }\n        .hand { position: absolute; width: 50%; height: 2px; background: black; top: 50%; transform-origin: 100%; transform: rotate(90deg); }\n        #second-hand { background: red; }\n        #controls { margin-top: 20px; text-align: center; }\n        button { margin: 5px; }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv id=\"clock\"\u003e\n        \u003cdiv id=\"hour-hand\" class=\"hand\"\u003e\u003c/div\u003e\n        \u003cdiv id=\"minute-hand\" class=\"hand\"\u003e\u003c/div\u003e\n        \u003cdiv id=\"second-hand\" class=\"hand\"\u003e\u003c/div\u003e\n    \u003c/div\u003e\n    \u003cdiv id=\"controls\"\u003e\n        \u003cbutton id=\"start-stop\"\u003eStart\u003c/button\u003e\n        \u003cbutton id=\"toggle-format\"\u003eSwitch to 24-hour\u003c/button\u003e\n        \u003cbutton id=\"change-color\"\u003eChange Color\u003c/button\u003e\n        \u003cbutton id=\"toggle-second-hand\"\u003eHide Second Hand\u003c/button\u003e\n    \u003c/div\u003e\n    \u003cscript src=\"index.js\"\u003e\u003c/script\u003e\n\u003cscript\u003elet isRunning = false;\nlet is24HourFormat = false;\nlet showSecondHand = true;\nlet intervalId;\nconst hourHand = document.getElementById('hour-hand');\nconst minuteHand = document.getElementById('minute-hand');\nconst secondHand = document.getElementById('second-hand');\nconst startStopButton = document.getElementById('start-stop');\nconst toggleFormatButton = document.getElementById('toggle-format');\nconst changeColorButton = document.getElementById('change-color');\nconst toggleSecondHandButton = document.getElementById('toggle-second-hand');\n\nfunction updateClock() {\n    const now = new Date();\n    let hours = now.getHours();\n    const minutes = now.getMinutes();\n    const seconds = now.getSeconds();\n    if (!is24HourFormat) {\n        hours = hours % 12 || 12;\n    }\n    const hourDeg = (hours % 12) * 30 + minutes * 0.5;\n    const minuteDeg = minutes * 6;\n    const secondDeg = seconds * 6;\n    hourHand.style.transform = `rotate(${hourDeg}deg)`;\n    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;\n    secondHand.style.transform = `rotate(${secondDeg}deg)`;\n}\n\nfunction startClock() {\n    if (!isRunning) {\n        intervalId = setInterval(updateClock, 1000);\n        isRunning = true;\n        startStopButton.textContent = 'Stop';\n    }\n}\n\nfunction stopClock() {\n    if (isRunning) {\n        clearInterval(intervalId);\n        isRunning = false;\n        startStopButton.textContent = 'Start';\n    }\n}\n\nfunction toggleClock() {\n    if (isRunning) {\n        stopClock();\n    } else {\n        startClock();\n    }\n}\n\nfunction toggleFormat() {\n    is24HourFormat = !is24HourFormat;\n    toggleFormatButton.textContent = is24HourFormat ? 'Switch to 12-hour' : 'Switch to 24-hour';\n    updateClock();\n}\n\nfunction changeColor() {\n    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;\n    hourHand.style.background = randomColor;\n    minuteHand.style.background = randomColor;\n    if (showSecondHand) {\n        secondHand.style.background = randomColor;\n    }\n}\n\nfunction toggleSecondHand() {\n    showSecondHand = !showSecondHand;\n    secondHand.style.display = showSecondHand ? 'block' : 'none';\n    toggleSecondHandButton.textContent = showSecondHand ? 'Hide Second Hand' : 'Show Second Hand';\n}\n\nstartStopButton.addEventListener('click', toggleClock);\ntoggleFormatButton.addEventListener('click', toggleFormat);\nchangeColorButton.addEventListener('click', changeColor);\ntoggleSecondHandButton.addEventListener('click', toggleSecondHand);\n\nupdateClock();\nstartClock();\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e",
            additional_notes:
              'No external libraries are used. The clock is implemented using only HTML, CSS, and JavaScript.',
            installation_commands: 'null',
          },
        },
      ],
    },
    status: 'IN_PROGRESS',
    numResults: 0,
    maxResults: 1,
    numCriteria: 1,
    isCompletedByWorker: false,
  },
  {
    taskId: 'demo1',
    title: 'LLM Code Generation Task (Demo)',
    body: "Write a JavaScript program that creates a visualization of a roller coaster. The roller coaster should be interactive with the following requirements: 1) The user should be able to change the speed of the roller coaster by dragging a slider. 2) The user should be able to toggle the roller coaster's direction (forward or backward) by clicking a button labeled 'Reverse Direction'. 3) The user should be able to add or remove carts to the roller coaster by clicking buttons labeled 'Add Cart' and 'Remove Cart'. 4) The user should be able to change the color of the roller coaster's track by selecting a color from a color picker. The final output should be displayed in a web page using HTML and CSS. The program should only use JavaScript's built-in libraries and ensure that the output has both index.js and index.html files.\nNote:\n- The visualization should be implemented in JavaScript with HTML and CSS.\n- Ensure that the output has both index.js and index.html files\n",
    expireAt: '2099-08-29T18:17:43Z',
    type: 'CODE_GENERATION',
    taskData: {
      task: 'CODE_GENERATION',
      prompt:
        "Write a JavaScript program that creates a visualization of a roller coaster. The roller coaster should be interactive with the following requirements: 1) The user should be able to change the speed of the roller coaster by dragging a slider. 2) The user should be able to toggle the roller coaster's direction (forward or backward) by clicking a button labeled 'Reverse Direction'. 3) The user should be able to add or remove carts to the roller coaster by clicking buttons labeled 'Add Cart' and 'Remove Cart'. 4) The user should be able to change the color of the roller coaster's track by selecting a color from a color picker. The final output should be displayed in a web page using HTML and CSS. The program should only use JavaScript's built-in libraries and ensure that the output has both index.js and index.html files.\nNote:\n- The visualization should be implemented in JavaScript with HTML and CSS.\n- Ensure that the output has both index.js and index.html files\n",
      criteria: [
        {
          max: 100,
          min: 1,
          type: 'multi-score',
          options: [
            'anthropic/claude-3-sonnet-20240229',
            'anthropic/claude-3-haiku-20240307',
            'openai/gpt-4-turbo-2024-04-09',
            'anthropic/claude-3-opus-20240229',
          ],
        },
      ],
      responses: [
        {
          model: 'anthropic/claude-3-sonnet-20240229',
          completion: {
            files: {
              'index.js': {
                content:
                  "const canvas = document.getElementById('canvas');\nconst ctx = canvas.getContext('2d');\nconst speedSlider = document.getElementById('speed');\nconst reverseDirectionButton = document.getElementById('reverseDirection');\nconst addCartButton = document.getElementById('addCart');\nconst removeCartButton = document.getElementById('removeCart');\nconst trackColorPicker = document.getElementById('trackColor');\n\nlet carts = [];\nlet trackColor = '#000000';\nlet speed = 5;\nlet direction = 1;\n\nconst trackPoints = [\n  { x: 100, y: 500 },\n  { x: 200, y: 400 },\n  { x: 300, y: 500 },\n  { x: 400, y: 300 },\n  { x: 500, y: 500 },\n  { x: 600, y: 400 },\n  { x: 700, y: 500 },\n];\n\nfunction drawTrack() {\n  ctx.beginPath();\n  ctx.moveTo(trackPoints[0].x, trackPoints[0].y);\n  for (let i = 1; i \u003c trackPoints.length; i++) {\n    ctx.lineTo(trackPoints[i].x, trackPoints[i].y);\n  }\n  ctx.strokeStyle = trackColor;\n  ctx.stroke();\n}\n\nfunction drawCarts() {\n  for (let i = 0; i \u003c carts.length; i++) {\n    const cart = carts[i];\n    ctx.beginPath();\n    ctx.rect(cart.x - 10, cart.y - 10, 20, 20);\n    ctx.fillStyle = 'red';\n    ctx.fill();\n  }\n}\n\nfunction updateCarts() {\n  for (let i = 0; i \u003c carts.length; i++) {\n    const cart = carts[i];\n    const nextPoint = getNextPoint(cart.x, cart.y, direction);\n    cart.x = nextPoint.x;\n    cart.y = nextPoint.y;\n  }\n}\n\nfunction getNextPoint(x, y, direction) {\n  for (let i = 0; i \u003c trackPoints.length - 1; i++) {\n    const p1 = trackPoints[i];\n    const p2 = trackPoints[i + 1];\n    if (isPointOnLine(x, y, p1, p2)) {\n      const dx = p2.x - p1.x;\n      const dy = p2.y - p1.y;\n      const distance = Math.sqrt(dx * dx + dy * dy);\n      const newX = x + (dx / distance) * speed * direction;\n      const newY = y + (dy / distance) * speed * direction;\n      return { x: newX, y: newY };\n    }\n  }\n  return { x, y };\n}\n\nfunction isPointOnLine(x, y, p1, p2) {\n  const dx = p2.x - p1.x;\n  const dy = p2.y - p1.y;\n  const distance = Math.sqrt(dx * dx + dy * dy);\n  const u = ((x - p1.x) * dx + (y - p1.y) * dy) / (distance * distance);\n  return u \u003e= 0 \u0026\u0026 u \u003c= 1;\n}\n\nfunction animate() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  drawTrack();\n  updateCarts();\n  drawCarts();\n  requestAnimationFrame(animate);\n}\n\nspeedSlider.addEventListener('input', () =\u003e {\n  speed = speedSlider.value;\n});\n\nreverseDirectionButton.addEventListener('click', () =\u003e {\n  direction *= -1;\n});\n\naddCartButton.addEventListener('click', () =\u003e {\n  carts.push({ x: 100, y: 500 });\n});\n\nremoveCartButton.addEventListener('click', () =\u003e {\n  if (carts.length \u003e 0) {\n    carts.pop();\n  }\n});\n\ntrackColorPicker.addEventListener('input', () =\u003e {\n  trackColor = trackColorPicker.value;\n});\n\ncarts.push({ x: 100, y: 500 });\nanimate();\n",
              },
              'index.html': {
                content:
                  '\u003c!DOCTYPE html\u003e\n\u003chtml\u003e\n\u003chead\u003e\n  \u003ctitle\u003eRoller Coaster Visualization\u003c/title\u003e\n  \u003cstyle\u003e\n    canvas {\n      border: 1px solid black;\n    }\n  \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n  \u003ccanvas id="canvas" width="800" height="600"\u003e\u003c/canvas\u003e\n  \u003cdiv\u003e\n    \u003clabel for="speed"\u003eSpeed:\u003c/label\u003e\n    \u003cinput type="range" id="speed" min="1" max="10" value="5"\u003e\n  \u003c/div\u003e\n  \u003cbutton id="reverseDirection"\u003eReverse Direction\u003c/button\u003e\n  \u003cbutton id="addCart"\u003eAdd Cart\u003c/button\u003e\n  \u003cbutton id="removeCart"\u003eRemove Cart\u003c/button\u003e\n  \u003clabel for="trackColor"\u003eTrack Color:\u003c/label\u003e\n  \u003cinput type="color" id="trackColor" value="#000000"\u003e\n  \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
              },
              'package.json': {
                content: {
                  name: 'javascript',
                  scripts: {
                    build: 'parcel build ./index.html',
                    start: 'parcel ./index.html',
                  },
                  version: '1.0.0',
                  keywords: ['css', 'javascript'],
                  description: 'The JavaScript template',
                  devDependencies: {
                    eslint: '^7.2.0',
                    parcel: '^2.0.0',
                    'babel-eslint': '^10.1.0',
                  },
                },
              },
            },
            environment: 'server',
            sandbox_url: 'https://8llkrv.csb.app/',
            combined_html:
              '\u003c!DOCTYPE html\u003e\n\u003chtml\u003e\n\u003chead\u003e\n  \u003ctitle\u003eRoller Coaster Visualization\u003c/title\u003e\n  \u003cstyle\u003e\n    canvas {\n      border: 1px solid black;\n    }\n  \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n  \u003ccanvas id="canvas" width="800" height="600"\u003e\u003c/canvas\u003e\n  \u003cdiv\u003e\n    \u003clabel for="speed"\u003eSpeed:\u003c/label\u003e\n    \u003cinput type="range" id="speed" min="1" max="10" value="5"\u003e\n  \u003c/div\u003e\n  \u003cbutton id="reverseDirection"\u003eReverse Direction\u003c/button\u003e\n  \u003cbutton id="addCart"\u003eAdd Cart\u003c/button\u003e\n  \u003cbutton id="removeCart"\u003eRemove Cart\u003c/button\u003e\n  \u003clabel for="trackColor"\u003eTrack Color:\u003c/label\u003e\n  \u003cinput type="color" id="trackColor" value="#000000"\u003e\n  \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003cscript\u003econst canvas = document.getElementById(\'canvas\');\nconst ctx = canvas.getContext(\'2d\');\nconst speedSlider = document.getElementById(\'speed\');\nconst reverseDirectionButton = document.getElementById(\'reverseDirection\');\nconst addCartButton = document.getElementById(\'addCart\');\nconst removeCartButton = document.getElementById(\'removeCart\');\nconst trackColorPicker = document.getElementById(\'trackColor\');\n\nlet carts = [];\nlet trackColor = \'#000000\';\nlet speed = 5;\nlet direction = 1;\n\nconst trackPoints = [\n  { x: 100, y: 500 },\n  { x: 200, y: 400 },\n  { x: 300, y: 500 },\n  { x: 400, y: 300 },\n  { x: 500, y: 500 },\n  { x: 600, y: 400 },\n  { x: 700, y: 500 },\n];\n\nfunction drawTrack() {\n  ctx.beginPath();\n  ctx.moveTo(trackPoints[0].x, trackPoints[0].y);\n  for (let i = 1; i \u003c trackPoints.length; i++) {\n    ctx.lineTo(trackPoints[i].x, trackPoints[i].y);\n  }\n  ctx.strokeStyle = trackColor;\n  ctx.stroke();\n}\n\nfunction drawCarts() {\n  for (let i = 0; i \u003c carts.length; i++) {\n    const cart = carts[i];\n    ctx.beginPath();\n    ctx.rect(cart.x - 10, cart.y - 10, 20, 20);\n    ctx.fillStyle = \'red\';\n    ctx.fill();\n  }\n}\n\nfunction updateCarts() {\n  for (let i = 0; i \u003c carts.length; i++) {\n    const cart = carts[i];\n    const nextPoint = getNextPoint(cart.x, cart.y, direction);\n    cart.x = nextPoint.x;\n    cart.y = nextPoint.y;\n  }\n}\n\nfunction getNextPoint(x, y, direction) {\n  for (let i = 0; i \u003c trackPoints.length - 1; i++) {\n    const p1 = trackPoints[i];\n    const p2 = trackPoints[i + 1];\n    if (isPointOnLine(x, y, p1, p2)) {\n      const dx = p2.x - p1.x;\n      const dy = p2.y - p1.y;\n      const distance = Math.sqrt(dx * dx + dy * dy);\n      const newX = x + (dx / distance) * speed * direction;\n      const newY = y + (dy / distance) * speed * direction;\n      return { x: newX, y: newY };\n    }\n  }\n  return { x, y };\n}\n\nfunction isPointOnLine(x, y, p1, p2) {\n  const dx = p2.x - p1.x;\n  const dy = p2.y - p1.y;\n  const distance = Math.sqrt(dx * dx + dy * dy);\n  const u = ((x - p1.x) * dx + (y - p1.y) * dy) / (distance * distance);\n  return u \u003e= 0 \u0026\u0026 u \u003c= 1;\n}\n\nfunction animate() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  drawTrack();\n  updateCarts();\n  drawCarts();\n  requestAnimationFrame(animate);\n}\n\nspeedSlider.addEventListener(\'input\', () =\u003e {\n  speed = speedSlider.value;\n});\n\nreverseDirectionButton.addEventListener(\'click\', () =\u003e {\n  direction *= -1;\n});\n\naddCartButton.addEventListener(\'click\', () =\u003e {\n  carts.push({ x: 100, y: 500 });\n});\n\nremoveCartButton.addEventListener(\'click\', () =\u003e {\n  if (carts.length \u003e 0) {\n    carts.pop();\n  }\n});\n\ntrackColorPicker.addEventListener(\'input\', () =\u003e {\n  trackColor = trackColorPicker.value;\n});\n\ncarts.push({ x: 100, y: 500 });\nanimate();\n\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e',
            additional_notes:
              'This code uses only built-in JavaScript libraries and does not require any external dependencies.',
            installation_commands: 'null',
          },
        },
        {
          model: 'anthropic/claude-3-haiku-20240307',
          completion: {
            files: {
              'index.js': {
                content:
                  "const canvas = document.getElementById('canvas');\nconst ctx = canvas.getContext('2d');\nconst reverseDirectionBtn = document.getElementById('reverseDirection');\nconst addCartBtn = document.getElementById('addCart');\nconst removeCartBtn = document.getElementById('removeCart');\nconst speedSlider = document.getElementById('speedSlider');\nconst trackColorPicker = document.getElementById('trackColorPicker');\n\nconst trackWidth = 50;\nconst trackHeight = 300;\nconst cartWidth = 50;\nconst cartHeight = 30;\nconst carts = [];\nlet direction = 1;\nlet speed = 50;\nlet trackColor = '#000000';\n\nfunction drawTrack() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    ctx.fillStyle = trackColor;\n    ctx.fillRect(0, canvas.height - trackHeight, canvas.width, trackHeight);\n}\n\nfunction drawCarts() {\n    carts.forEach((cart, index) =\u003e {\n        ctx.fillStyle = 'red';\n        ctx.fillRect(cart.x, cart.y, cartWidth, cartHeight);\n        cart.x += direction * speed / 50;\n        if (cart.x \u003c -cartWidth || cart.x \u003e canvas.width) {\n            carts.splice(index, 1);\n        }\n    });\n}\n\nfunction addCart() {\n    carts.push({\n        x: 0,\n        y: canvas.height - trackHeight - cartHeight\n    });\n}\n\nfunction removeCart() {\n    carts.pop();\n}\n\nfunction toggleDirection() {\n    direction *= -1;\n}\n\nfunction updateSpeed() {\n    speed = parseInt(speedSlider.value);\n}\n\nfunction updateTrackColor() {\n    trackColor = trackColorPicker.value;\n}\n\nfunction animate() {\n    drawTrack();\n    drawCarts();\n    requestAnimationFrame(animate);\n}\n\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\n\nreverseDirectionBtn.addEventListener('click', toggleDirection);\naddCartBtn.addEventListener('click', addCart);\nremoveCartBtn.addEventListener('click', removeCart);\nspeedSlider.addEventListener('input', updateSpeed);\ntrackColorPicker.addEventListener('input', updateTrackColor);\n\nanimate();",
              },
              'index.html': {
                content:
                  '\u003c!DOCTYPE html\u003e\n\u003chtml\u003e\n\u003chead\u003e\n    \u003ctitle\u003eRoller Coaster Visualization\u003c/title\u003e\n    \u003cstyle\u003e\n        body {\n            margin: 0;\n            padding: 0;\n            font-family: Arial, sans-serif;\n        }\n        #container {\n            width: 100vw;\n            height: 100vh;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n        }\n        #canvas {\n            border: 1px solid black;\n        }\n        #controls {\n            margin-top: 20px;\n        }\n        button, input {\n            margin: 0 10px;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv id="container"\u003e\n        \u003ccanvas id="canvas"\u003e\u003c/canvas\u003e\n        \u003cdiv id="controls"\u003e\n            \u003cbutton id="reverseDirection"\u003eReverse Direction\u003c/button\u003e\n            \u003cbutton id="addCart"\u003eAdd Cart\u003c/button\u003e\n            \u003cbutton id="removeCart"\u003eRemove Cart\u003c/button\u003e\n            \u003cinput type="range" id="speedSlider" min="1" max="100" value="50"\u003e\n            \u003cinput type="color" id="trackColorPicker" value="#000000"\u003e\n        \u003c/div\u003e\n    \u003c/div\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
              },
              'package.json': {
                content: {
                  name: 'javascript',
                  scripts: {
                    build: 'parcel build ./index.html',
                    start: 'parcel ./index.html',
                  },
                  version: '1.0.0',
                  keywords: ['css', 'javascript'],
                  description: 'The JavaScript template',
                  devDependencies: {
                    eslint: '^7.2.0',
                    parcel: '^2.0.0',
                    'babel-eslint': '^10.1.0',
                  },
                },
              },
            },
            environment: 'server',
            sandbox_url: 'https://lwz6pk.csb.app/',
            combined_html:
              '\u003c!DOCTYPE html\u003e\n\u003chtml\u003e\n\u003chead\u003e\n    \u003ctitle\u003eRoller Coaster Visualization\u003c/title\u003e\n    \u003cstyle\u003e\n        body {\n            margin: 0;\n            padding: 0;\n            font-family: Arial, sans-serif;\n        }\n        #container {\n            width: 100vw;\n            height: 100vh;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n        }\n        #canvas {\n            border: 1px solid black;\n        }\n        #controls {\n            margin-top: 20px;\n        }\n        button, input {\n            margin: 0 10px;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv id="container"\u003e\n        \u003ccanvas id="canvas"\u003e\u003c/canvas\u003e\n        \u003cdiv id="controls"\u003e\n            \u003cbutton id="reverseDirection"\u003eReverse Direction\u003c/button\u003e\n            \u003cbutton id="addCart"\u003eAdd Cart\u003c/button\u003e\n            \u003cbutton id="removeCart"\u003eRemove Cart\u003c/button\u003e\n            \u003cinput type="range" id="speedSlider" min="1" max="100" value="50"\u003e\n            \u003cinput type="color" id="trackColorPicker" value="#000000"\u003e\n        \u003c/div\u003e\n    \u003c/div\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003cscript\u003econst canvas = document.getElementById(\'canvas\');\nconst ctx = canvas.getContext(\'2d\');\nconst reverseDirectionBtn = document.getElementById(\'reverseDirection\');\nconst addCartBtn = document.getElementById(\'addCart\');\nconst removeCartBtn = document.getElementById(\'removeCart\');\nconst speedSlider = document.getElementById(\'speedSlider\');\nconst trackColorPicker = document.getElementById(\'trackColorPicker\');\n\nconst trackWidth = 50;\nconst trackHeight = 300;\nconst cartWidth = 50;\nconst cartHeight = 30;\nconst carts = [];\nlet direction = 1;\nlet speed = 50;\nlet trackColor = \'#000000\';\n\nfunction drawTrack() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    ctx.fillStyle = trackColor;\n    ctx.fillRect(0, canvas.height - trackHeight, canvas.width, trackHeight);\n}\n\nfunction drawCarts() {\n    carts.forEach((cart, index) =\u003e {\n        ctx.fillStyle = \'red\';\n        ctx.fillRect(cart.x, cart.y, cartWidth, cartHeight);\n        cart.x += direction * speed / 50;\n        if (cart.x \u003c -cartWidth || cart.x \u003e canvas.width) {\n            carts.splice(index, 1);\n        }\n    });\n}\n\nfunction addCart() {\n    carts.push({\n        x: 0,\n        y: canvas.height - trackHeight - cartHeight\n    });\n}\n\nfunction removeCart() {\n    carts.pop();\n}\n\nfunction toggleDirection() {\n    direction *= -1;\n}\n\nfunction updateSpeed() {\n    speed = parseInt(speedSlider.value);\n}\n\nfunction updateTrackColor() {\n    trackColor = trackColorPicker.value;\n}\n\nfunction animate() {\n    drawTrack();\n    drawCarts();\n    requestAnimationFrame(animate);\n}\n\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\n\nreverseDirectionBtn.addEventListener(\'click\', toggleDirection);\naddCartBtn.addEventListener(\'click\', addCart);\nremoveCartBtn.addEventListener(\'click\', removeCart);\nspeedSlider.addEventListener(\'input\', updateSpeed);\ntrackColorPicker.addEventListener(\'input\', updateTrackColor);\n\nanimate();\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e',
            additional_notes:
              'The code uses only built-in JavaScript libraries and does not require any additional installation commands.',
            installation_commands: 'null',
          },
        },
        {
          model: 'openai/gpt-4-turbo-2024-04-09',
          completion: {
            files: {
              'index.js': {
                content:
                  "const speedSlider = document.getElementById('speedSlider');\nconst reverseButton = document.getElementById('reverseButton');\nconst addCartButton = document.getElementById('addCartButton');\nconst removeCartButton = document.getElementById('removeCartButton');\nconst colorPicker = document.getElementById('colorPicker');\nlet direction = 1; // 1 for forward, -1 for reverse\nlet speed = 1; // Default speed\nlet carts = 1; // Default number of carts\n\nfunction updateSpeed() {\n  speed = speedSlider.value;\n}\n\nfunction toggleDirection() {\n  direction *= -1;\n}\n\nfunction addCart() {\n  carts++;\n}\n\nfunction removeCart() {\n  if (carts \u003e 1) carts--;\n}\n\nfunction changeTrackColor() {\n  const track = document.querySelector('.track');\n  track.style.backgroundColor = colorPicker.value;\n}\n\nspeedSlider.addEventListener('input', updateSpeed);\nreverseButton.addEventListener('click', toggleDirection);\naddCartButton.addEventListener('click', addCart);\nremoveCartButton.addEventListener('click', removeCart);\ncolorPicker.addEventListener('change', changeTrackColor);",
              },
              'index.html': {
                content:
                  "\u003c!DOCTYPE html\u003e\n\u003chtml lang='en'\u003e\n\u003chead\u003e\n    \u003cmeta charset='UTF-8'\u003e\n    \u003cmeta name='viewport' content='width=device-width, initial-scale=1.0'\u003e\n    \u003ctitle\u003eRoller Coaster Visualization\u003c/title\u003e\n    \u003cstyle\u003e\n        .track { width: 100%; height: 20px; background-color: black; }\n        .cart { width: 50px; height: 20px; background-color: red; }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv class='track'\u003e\u003c/div\u003e\n    \u003cinput type='range' id='speedSlider' min='1' max='10' value='1'\u003e\n    \u003cbutton id='reverseButton'\u003eReverse Direction\u003c/button\u003e\n    \u003cbutton id='addCartButton'\u003eAdd Cart\u003c/button\u003e\n    \u003cbutton id='removeCartButton'\u003eRemove Cart\u003c/button\u003e\n    \u003cinput type='color' id='colorPicker'\u003e\n    \u003cscript src='index.js'\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e",
              },
              'package.json': {
                content: {
                  name: 'javascript',
                  scripts: {
                    build: 'parcel build ./index.html',
                    start: 'parcel ./index.html',
                  },
                  version: '1.0.0',
                  keywords: ['css', 'javascript'],
                  description: 'The JavaScript template',
                  devDependencies: {
                    eslint: '^7.2.0',
                    parcel: '^2.0.0',
                    'babel-eslint': '^10.1.0',
                  },
                },
              },
            },
            environment: 'server',
            sandbox_url: 'https://pq2rvg.csb.app/',
            combined_html:
              "\u003c!DOCTYPE html\u003e\n\u003chtml lang='en'\u003e\n\u003chead\u003e\n    \u003cmeta charset='UTF-8'\u003e\n    \u003cmeta name='viewport' content='width=device-width, initial-scale=1.0'\u003e\n    \u003ctitle\u003eRoller Coaster Visualization\u003c/title\u003e\n    \u003cstyle\u003e\n        .track { width: 100%; height: 20px; background-color: black; }\n        .cart { width: 50px; height: 20px; background-color: red; }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv class='track'\u003e\u003c/div\u003e\n    \u003cinput type='range' id='speedSlider' min='1' max='10' value='1'\u003e\n    \u003cbutton id='reverseButton'\u003eReverse Direction\u003c/button\u003e\n    \u003cbutton id='addCartButton'\u003eAdd Cart\u003c/button\u003e\n    \u003cbutton id='removeCartButton'\u003eRemove Cart\u003c/button\u003e\n    \u003cinput type='color' id='colorPicker'\u003e\n    \u003cscript src='index.js'\u003e\u003c/script\u003e\n\u003cscript\u003econst speedSlider = document.getElementById('speedSlider');\nconst reverseButton = document.getElementById('reverseButton');\nconst addCartButton = document.getElementById('addCartButton');\nconst removeCartButton = document.getElementById('removeCartButton');\nconst colorPicker = document.getElementById('colorPicker');\nlet direction = 1; // 1 for forward, -1 for reverse\nlet speed = 1; // Default speed\nlet carts = 1; // Default number of carts\n\nfunction updateSpeed() {\n  speed = speedSlider.value;\n}\n\nfunction toggleDirection() {\n  direction *= -1;\n}\n\nfunction addCart() {\n  carts++;\n}\n\nfunction removeCart() {\n  if (carts \u003e 1) carts--;\n}\n\nfunction changeTrackColor() {\n  const track = document.querySelector('.track');\n  track.style.backgroundColor = colorPicker.value;\n}\n\nspeedSlider.addEventListener('input', updateSpeed);\nreverseButton.addEventListener('click', toggleDirection);\naddCartButton.addEventListener('click', addCart);\nremoveCartButton.addEventListener('click', removeCart);\ncolorPicker.addEventListener('change', changeTrackColor);\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e",
            additional_notes: 'The code uses built-in libraries so no additional commands are required.',
            installation_commands: 'null',
          },
        },
        {
          model: 'anthropic/claude-3-opus-20240229',
          completion: {
            files: {
              'index.js': {
                content:
                  "const canvas = document.getElementById('canvas');\nconst ctx = canvas.getContext('2d');\nconst speedSlider = document.getElementById('speedSlider');\nconst reverseBtn = document.getElementById('reverseBtn');\nconst addCartBtn = document.getElementById('addCartBtn');\nconst removeCartBtn = document.getElementById('removeCartBtn');\nconst colorPicker = document.getElementById('colorPicker');\n\nlet speed = 5;\nlet direction = 1;\nlet carts = 1;\nlet trackColor = '#000000';\n\nconst track = [\n  { x: 100, y: 500 },\n  { x: 200, y: 400 },\n  { x: 300, y: 300 },\n  { x: 400, y: 400 },\n  { x: 500, y: 500 },\n  { x: 600, y: 400 },\n  { x: 700, y: 300 },\n];\n\nlet cartPositions = [0];\n\nfunction drawTrack() {\n  ctx.strokeStyle = trackColor;\n  ctx.lineWidth = 4;\n  ctx.beginPath();\n  ctx.moveTo(track[0].x, track[0].y);\n  for (let i = 1; i \u003c track.length; i++) {\n    ctx.lineTo(track[i].x, track[i].y);\n  }\n  ctx.stroke();\n}\n\nfunction drawCarts() {\n  ctx.fillStyle = 'red';\n  for (let i = 0; i \u003c carts; i++) {\n    const pos = cartPositions[i];\n    const { x, y } = getCartPosition(pos);\n    ctx.beginPath();\n    ctx.arc(x, y, 10, 0, Math.PI * 2);\n    ctx.fill();\n  }\n}\n\nfunction getCartPosition(pos) {\n  const segment = Math.floor(pos);\n  const t = pos - segment;\n  const p1 = track[segment];\n  const p2 = track[segment + 1] || track[0];\n  const x = p1.x + (p2.x - p1.x) * t;\n  const y = p1.y + (p2.y - p1.y) * t;\n  return { x, y };\n}\n\nfunction updateCartPositions() {\n  for (let i = 0; i \u003c carts; i++) {\n    cartPositions[i] += speed * 0.01 * direction;\n    if (cartPositions[i] \u003e= track.length) {\n      cartPositions[i] = 0;\n    } else if (cartPositions[i] \u003c 0) {\n      cartPositions[i] = track.length - 1;\n    }\n  }\n}\n\nfunction animate() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  drawTrack();\n  drawCarts();\n  updateCartPositions();\n  requestAnimationFrame(animate);\n}\n\nspeedSlider.addEventListener('input', (e) =\u003e {\n  speed = parseInt(e.target.value);\n});\n\nreverseBtn.addEventListener('click', () =\u003e {\n  direction *= -1;\n});\n\naddCartBtn.addEventListener('click', () =\u003e {\n  carts++;\n  cartPositions.push(0);\n});\n\nremoveCartBtn.addEventListener('click', () =\u003e {\n  if (carts \u003e 1) {\n    carts--;\n    cartPositions.pop();\n  }\n});\n\ncolorPicker.addEventListener('input', (e) =\u003e {\n  trackColor = e.target.value;\n});\n\nanimate();\n",
              },
              'index.html': {
                content:
                  '\u003c!DOCTYPE html\u003e\n\u003chtml\u003e\n\u003chead\u003e\n  \u003ctitle\u003eRoller Coaster Visualization\u003c/title\u003e\n  \u003cstyle\u003e\n    canvas {\n      border: 1px solid black;\n    }\n    .controls {\n      margin-top: 10px;\n    }\n    .controls button {\n      margin-right: 10px;\n    }\n  \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n  \u003ccanvas id="canvas" width="800" height="600"\u003e\u003c/canvas\u003e\n  \u003cdiv class="controls"\u003e\n    \u003clabel for="speedSlider"\u003eSpeed:\u003c/label\u003e\n    \u003cinput type="range" id="speedSlider" min="1" max="10" value="5"\u003e\n    \u003cbutton id="reverseBtn"\u003eReverse Direction\u003c/button\u003e\n    \u003cbutton id="addCartBtn"\u003eAdd Cart\u003c/button\u003e\n    \u003cbutton id="removeCartBtn"\u003eRemove Cart\u003c/button\u003e\n    \u003cinput type="color" id="colorPicker"\u003e\n  \u003c/div\u003e\n  \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
              },
              'package.json': {
                content: {
                  name: 'javascript',
                  scripts: {
                    build: 'parcel build ./index.html',
                    start: 'parcel ./index.html',
                  },
                  version: '1.0.0',
                  keywords: ['css', 'javascript'],
                  description: 'The JavaScript template',
                  devDependencies: {
                    eslint: '^7.2.0',
                    parcel: '^2.0.0',
                    'babel-eslint': '^10.1.0',
                  },
                },
              },
            },
            environment: 'server',
            sandbox_url: 'https://g3vxrf.csb.app/',
            combined_html:
              '\u003c!DOCTYPE html\u003e\n\u003chtml\u003e\n\u003chead\u003e\n  \u003ctitle\u003eRoller Coaster Visualization\u003c/title\u003e\n  \u003cstyle\u003e\n    canvas {\n      border: 1px solid black;\n    }\n    .controls {\n      margin-top: 10px;\n    }\n    .controls button {\n      margin-right: 10px;\n    }\n  \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n  \u003ccanvas id="canvas" width="800" height="600"\u003e\u003c/canvas\u003e\n  \u003cdiv class="controls"\u003e\n    \u003clabel for="speedSlider"\u003eSpeed:\u003c/label\u003e\n    \u003cinput type="range" id="speedSlider" min="1" max="10" value="5"\u003e\n    \u003cbutton id="reverseBtn"\u003eReverse Direction\u003c/button\u003e\n    \u003cbutton id="addCartBtn"\u003eAdd Cart\u003c/button\u003e\n    \u003cbutton id="removeCartBtn"\u003eRemove Cart\u003c/button\u003e\n    \u003cinput type="color" id="colorPicker"\u003e\n  \u003c/div\u003e\n  \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003cscript\u003econst canvas = document.getElementById(\'canvas\');\nconst ctx = canvas.getContext(\'2d\');\nconst speedSlider = document.getElementById(\'speedSlider\');\nconst reverseBtn = document.getElementById(\'reverseBtn\');\nconst addCartBtn = document.getElementById(\'addCartBtn\');\nconst removeCartBtn = document.getElementById(\'removeCartBtn\');\nconst colorPicker = document.getElementById(\'colorPicker\');\n\nlet speed = 5;\nlet direction = 1;\nlet carts = 1;\nlet trackColor = \'#000000\';\n\nconst track = [\n  { x: 100, y: 500 },\n  { x: 200, y: 400 },\n  { x: 300, y: 300 },\n  { x: 400, y: 400 },\n  { x: 500, y: 500 },\n  { x: 600, y: 400 },\n  { x: 700, y: 300 },\n];\n\nlet cartPositions = [0];\n\nfunction drawTrack() {\n  ctx.strokeStyle = trackColor;\n  ctx.lineWidth = 4;\n  ctx.beginPath();\n  ctx.moveTo(track[0].x, track[0].y);\n  for (let i = 1; i \u003c track.length; i++) {\n    ctx.lineTo(track[i].x, track[i].y);\n  }\n  ctx.stroke();\n}\n\nfunction drawCarts() {\n  ctx.fillStyle = \'red\';\n  for (let i = 0; i \u003c carts; i++) {\n    const pos = cartPositions[i];\n    const { x, y } = getCartPosition(pos);\n    ctx.beginPath();\n    ctx.arc(x, y, 10, 0, Math.PI * 2);\n    ctx.fill();\n  }\n}\n\nfunction getCartPosition(pos) {\n  const segment = Math.floor(pos);\n  const t = pos - segment;\n  const p1 = track[segment];\n  const p2 = track[segment + 1] || track[0];\n  const x = p1.x + (p2.x - p1.x) * t;\n  const y = p1.y + (p2.y - p1.y) * t;\n  return { x, y };\n}\n\nfunction updateCartPositions() {\n  for (let i = 0; i \u003c carts; i++) {\n    cartPositions[i] += speed * 0.01 * direction;\n    if (cartPositions[i] \u003e= track.length) {\n      cartPositions[i] = 0;\n    } else if (cartPositions[i] \u003c 0) {\n      cartPositions[i] = track.length - 1;\n    }\n  }\n}\n\nfunction animate() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  drawTrack();\n  drawCarts();\n  updateCartPositions();\n  requestAnimationFrame(animate);\n}\n\nspeedSlider.addEventListener(\'input\', (e) =\u003e {\n  speed = parseInt(e.target.value);\n});\n\nreverseBtn.addEventListener(\'click\', () =\u003e {\n  direction *= -1;\n});\n\naddCartBtn.addEventListener(\'click\', () =\u003e {\n  carts++;\n  cartPositions.push(0);\n});\n\nremoveCartBtn.addEventListener(\'click\', () =\u003e {\n  if (carts \u003e 1) {\n    carts--;\n    cartPositions.pop();\n  }\n});\n\ncolorPicker.addEventListener(\'input\', (e) =\u003e {\n  trackColor = e.target.value;\n});\n\nanimate();\n\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e',
            additional_notes:
              'This program creates an interactive roller coaster visualization using HTML5 canvas and JavaScript. The user can control the speed, direction, number of carts, and track color. The roller coaster animation is implemented using requestAnimationFrame for smooth rendering.',
            installation_commands: '',
          },
        },
      ],
    },
    status: 'IN_PROGRESS',
    numResults: 0,
    maxResults: 1,
    numCriteria: 1,
    isCompletedByWorker: false,
  },
  {
    taskId: 'demo2',
    title: 'LLM Code Generation Task (Demo)',
    body: 'Create a web-based visualization of a chair using only JavaScript, HTML, and CSS. The chair should have the following interactive features: 1. A color picker that allows users to change the color of the chair. 2. A slider that adjusts the height of the chair. 3. A button that rotates the chair 360 degrees. Ensure that you use only built-in JavaScript libraries. Note: - The visualization should be implemented in JavaScript with HTML and CSS. - Ensure that the output has both index.js and index.html files.\nNote:\n- The visualization should be implemented in JavaScript with HTML and CSS.\n- Ensure that the output has both index.js and index.html files\n',
    expireAt: '2099-08-29T18:19:41Z',
    type: 'CODE_GENERATION',
    taskData: {
      task: 'CODE_GENERATION',
      prompt:
        'Create a web-based visualization of a chair using only JavaScript, HTML, and CSS. The chair should have the following interactive features: 1. A color picker that allows users to change the color of the chair. 2. A slider that adjusts the height of the chair. 3. A button that rotates the chair 360 degrees. Ensure that you use only built-in JavaScript libraries. Note: - The visualization should be implemented in JavaScript with HTML and CSS. - Ensure that the output has both index.js and index.html files.\nNote:\n- The visualization should be implemented in JavaScript with HTML and CSS.\n- Ensure that the output has both index.js and index.html files\n',
      criteria: [
        {
          max: 100,
          min: 1,
          type: 'multi-score',
          options: [
            'openai/gpt-3.5-turbo-1106',
            'anthropic/claude-3-opus-20240229',
            'anthropic/claude-3-sonnet-20240229',
            'openai/gpt-4-1106-preview',
          ],
        },
      ],
      responses: [
        {
          model: 'openai/gpt-3.5-turbo-1106',
          completion: {
            files: {
              'index.js': {
                content:
                  "const chair = document.getElementById('chair');\nconst colorPicker = document.getElementById('colorPicker');\nconst heightSlider = document.getElementById('heightSlider');\nconst rotateButton = document.getElementById('rotateButton');\ncolorPicker.addEventListener('input', (event) =\u003e {\n  chair.style.backgroundColor = event.target.value;\n});\nheightSlider.addEventListener('input', (event) =\u003e {\n  chair.style.height = `${event.target.value}px`;\n});\nlet rotation = 0;\nrotateButton.addEventListener('click', () =\u003e {\n  rotation += 360;\n  chair.style.transform = `rotate(${rotation}deg)`;\n});\n",
              },
              'index.html': {
                content:
                  '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003eChair Visualization\u003c/title\u003e\n    \u003cstyle\u003e\n        #chair {\n            width: 100px;\n            height: 100px;\n            background-color: #808080;\n            transition: height 0.5s, background-color 0.5s;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv id="chair"\u003e\u003c/div\u003e\n    \u003cinput type="color" id="colorPicker"\u003e\n    \u003cinput type="range" id="heightSlider" min="50" max="200" value="100"\u003e\n    \u003cbutton id="rotateButton"\u003eRotate\u003c/button\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
              },
              'package.json': {
                content: {
                  name: 'javascript',
                  scripts: {
                    build: 'parcel build ./index.html',
                    start: 'parcel ./index.html',
                  },
                  version: '1.0.0',
                  keywords: ['css', 'javascript'],
                  description: 'The JavaScript template',
                  devDependencies: {
                    eslint: '^7.2.0',
                    parcel: '^2.0.0',
                    'babel-eslint': '^10.1.0',
                  },
                },
              },
            },
            environment: 'server',
            sandbox_url: 'https://f7kgd4.csb.app/',
            combined_html:
              '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003eChair Visualization\u003c/title\u003e\n    \u003cstyle\u003e\n        #chair {\n            width: 100px;\n            height: 100px;\n            background-color: #808080;\n            transition: height 0.5s, background-color 0.5s;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv id="chair"\u003e\u003c/div\u003e\n    \u003cinput type="color" id="colorPicker"\u003e\n    \u003cinput type="range" id="heightSlider" min="50" max="200" value="100"\u003e\n    \u003cbutton id="rotateButton"\u003eRotate\u003c/button\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003cscript\u003econst chair = document.getElementById(\'chair\');\nconst colorPicker = document.getElementById(\'colorPicker\');\nconst heightSlider = document.getElementById(\'heightSlider\');\nconst rotateButton = document.getElementById(\'rotateButton\');\ncolorPicker.addEventListener(\'input\', (event) =\u003e {\n  chair.style.backgroundColor = event.target.value;\n});\nheightSlider.addEventListener(\'input\', (event) =\u003e {\n  chair.style.height = `${event.target.value}px`;\n});\nlet rotation = 0;\nrotateButton.addEventListener(\'click\', () =\u003e {\n  rotation += 360;\n  chair.style.transform = `rotate(${rotation}deg)`;\n});\n\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e',
            additional_notes: 'The code uses built-in libraries so no additional commands are required.',
            installation_commands: 'null',
          },
        },
        {
          model: 'anthropic/claude-3-opus-20240229',
          completion: {
            files: {
              'index.js': {
                content:
                  "const chair = document.getElementById('chair');\nconst colorPicker = document.getElementById('colorPicker');\nconst heightSlider = document.getElementById('heightSlider');\nconst rotateButton = document.getElementById('rotateButton');\n\ncolorPicker.addEventListener('input', function() {\n  chair.style.backgroundColor = this.value;\n});\n\nheightSlider.addEventListener('input', function() {\n  chair.style.height = this.value + 'px';\n});\n\nlet isRotated = false;\nrotateButton.addEventListener('click', function() {\n  if (!isRotated) {\n    chair.style.transform = 'rotateY(360deg)';\n    isRotated = true;\n  } else {\n    chair.style.transform = 'rotateY(0deg)';\n    isRotated = false;\n  }\n});",
              },
              'index.html': {
                content:
                  '\u003c!DOCTYPE html\u003e\n\u003chtml\u003e\n\u003chead\u003e\n  \u003ctitle\u003eInteractive Chair Visualization\u003c/title\u003e\n  \u003cstyle\u003e\n    #chair {\n      width: 200px;\n      height: 200px;\n      background-color: #ff0000;\n      margin: 50px auto;\n      transform-style: preserve-3d;\n      transition: transform 0.5s;\n    }\n    \n    #controls {\n      text-align: center;\n    }\n  \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n  \u003cdiv id="chair"\u003e\u003c/div\u003e\n  \n  \u003cdiv id="controls"\u003e\n    \u003cinput type="color" id="colorPicker"\u003e\n    \u003cinput type="range" id="heightSlider" min="100" max="300" value="200"\u003e\n    \u003cbutton id="rotateButton"\u003eRotate\u003c/button\u003e\n  \u003c/div\u003e\n  \n  \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
              },
              'package.json': {
                content: {
                  name: 'javascript',
                  scripts: {
                    build: 'parcel build ./index.html',
                    start: 'parcel ./index.html',
                  },
                  version: '1.0.0',
                  keywords: ['css', 'javascript'],
                  description: 'The JavaScript template',
                  devDependencies: {
                    eslint: '^7.2.0',
                    parcel: '^2.0.0',
                    'babel-eslint': '^10.1.0',
                  },
                },
              },
            },
            environment: 'server',
            sandbox_url: 'https://7kngtq.csb.app/',
            combined_html:
              '\u003c!DOCTYPE html\u003e\n\u003chtml\u003e\n\u003chead\u003e\n  \u003ctitle\u003eInteractive Chair Visualization\u003c/title\u003e\n  \u003cstyle\u003e\n    #chair {\n      width: 200px;\n      height: 200px;\n      background-color: #ff0000;\n      margin: 50px auto;\n      transform-style: preserve-3d;\n      transition: transform 0.5s;\n    }\n    \n    #controls {\n      text-align: center;\n    }\n  \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n  \u003cdiv id="chair"\u003e\u003c/div\u003e\n  \n  \u003cdiv id="controls"\u003e\n    \u003cinput type="color" id="colorPicker"\u003e\n    \u003cinput type="range" id="heightSlider" min="100" max="300" value="200"\u003e\n    \u003cbutton id="rotateButton"\u003eRotate\u003c/button\u003e\n  \u003c/div\u003e\n  \n  \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003cscript\u003econst chair = document.getElementById(\'chair\');\nconst colorPicker = document.getElementById(\'colorPicker\');\nconst heightSlider = document.getElementById(\'heightSlider\');\nconst rotateButton = document.getElementById(\'rotateButton\');\n\ncolorPicker.addEventListener(\'input\', function() {\n  chair.style.backgroundColor = this.value;\n});\n\nheightSlider.addEventListener(\'input\', function() {\n  chair.style.height = this.value + \'px\';\n});\n\nlet isRotated = false;\nrotateButton.addEventListener(\'click\', function() {\n  if (!isRotated) {\n    chair.style.transform = \'rotateY(360deg)\';\n    isRotated = true;\n  } else {\n    chair.style.transform = \'rotateY(0deg)\';\n    isRotated = false;\n  }\n});\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e',
            additional_notes:
              'The code uses built-in JavaScript libraries, so no additional installation commands are required. The chair visualization is created using HTML and CSS, with interactivity added through JavaScript event listeners. The color picker changes the background color of the chair, the height slider adjusts the height, and the rotate button rotates the chair 360 degrees when clicked.',
            installation_commands: '',
          },
        },
        {
          model: 'anthropic/claude-3-sonnet-20240229',
          completion: {
            files: {
              'index.js': {
                content:
                  "const canvas = document.getElementById('chairCanvas');\nconst ctx = canvas.getContext('2d');\nconst colorPicker = document.getElementById('colorPicker');\nconst heightSlider = document.getElementById('heightSlider');\nconst rotateButton = document.getElementById('rotateButton');\n\nlet chairColor = '#ff0000';\nlet chairHeight = 100;\nlet chairRotation = 0;\n\nfunction drawChair() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  ctx.save();\n  ctx.translate(canvas.width / 2, canvas.height / 2);\n  ctx.rotate(chairRotation * Math.PI / 180);\n\n  // Draw chair legs\n  ctx.fillStyle = chairColor;\n  ctx.fillRect(-20, chairHeight - 20, 40, 20);\n  ctx.fillRect(-60, chairHeight, 20, -chairHeight + 20);\n  ctx.fillRect(40, chairHeight, 20, -chairHeight + 20);\n\n  // Draw chair seat\n  ctx.fillRect(-80, chairHeight - 40, 160, 20);\n\n  // Draw chair back\n  ctx.fillRect(-60, chairHeight - 120, 120, 20);\n  ctx.fillRect(-40, chairHeight - 120, 20, -80);\n  ctx.fillRect(20, chairHeight - 120, 20, -80);\n\n  ctx.restore();\n}\n\ncolorPicker.addEventListener('input', () =\u003e {\n  chairColor = colorPicker.value;\n  drawChair();\n});\n\nheightSlider.addEventListener('input', () =\u003e {\n  chairHeight = heightSlider.value;\n  drawChair();\n});\n\nrotateButton.addEventListener('click', () =\u003e {\n  chairRotation = (chairRotation + 90) % 360;\n  drawChair();\n});\n\ndrawChair();",
              },
              'index.html': {
                content:
                  '\u003c!DOCTYPE html\u003e\n\u003chtml\u003e\n\u003chead\u003e\n  \u003ctitle\u003eChair Visualization\u003c/title\u003e\n  \u003cstyle\u003e\n    canvas {\n      border: 1px solid black;\n    }\n  \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n  \u003ccanvas id="chairCanvas" width="500" height="500"\u003e\u003c/canvas\u003e\n  \u003cdiv\u003e\n    \u003clabel for="colorPicker"\u003eChair Color:\u003c/label\u003e\n    \u003cinput type="color" id="colorPicker" value="#ff0000"\u003e\n  \u003c/div\u003e\n  \u003cdiv\u003e\n    \u003clabel for="heightSlider"\u003eChair Height:\u003c/label\u003e\n    \u003cinput type="range" id="heightSlider" min="50" max="200" value="100"\u003e\n  \u003c/div\u003e\n  \u003cbutton id="rotateButton"\u003eRotate Chair\u003c/button\u003e\n  \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
              },
              'package.json': {
                content: {
                  name: 'javascript',
                  scripts: {
                    build: 'parcel build ./index.html',
                    start: 'parcel ./index.html',
                  },
                  version: '1.0.0',
                  keywords: ['css', 'javascript'],
                  description: 'The JavaScript template',
                  devDependencies: {
                    eslint: '^7.2.0',
                    parcel: '^2.0.0',
                    'babel-eslint': '^10.1.0',
                  },
                },
              },
            },
            environment: 'server',
            sandbox_url: 'https://4ndphs.csb.app/',
            combined_html:
              '\u003c!DOCTYPE html\u003e\n\u003chtml\u003e\n\u003chead\u003e\n  \u003ctitle\u003eChair Visualization\u003c/title\u003e\n  \u003cstyle\u003e\n    canvas {\n      border: 1px solid black;\n    }\n  \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n  \u003ccanvas id="chairCanvas" width="500" height="500"\u003e\u003c/canvas\u003e\n  \u003cdiv\u003e\n    \u003clabel for="colorPicker"\u003eChair Color:\u003c/label\u003e\n    \u003cinput type="color" id="colorPicker" value="#ff0000"\u003e\n  \u003c/div\u003e\n  \u003cdiv\u003e\n    \u003clabel for="heightSlider"\u003eChair Height:\u003c/label\u003e\n    \u003cinput type="range" id="heightSlider" min="50" max="200" value="100"\u003e\n  \u003c/div\u003e\n  \u003cbutton id="rotateButton"\u003eRotate Chair\u003c/button\u003e\n  \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003cscript\u003econst canvas = document.getElementById(\'chairCanvas\');\nconst ctx = canvas.getContext(\'2d\');\nconst colorPicker = document.getElementById(\'colorPicker\');\nconst heightSlider = document.getElementById(\'heightSlider\');\nconst rotateButton = document.getElementById(\'rotateButton\');\n\nlet chairColor = \'#ff0000\';\nlet chairHeight = 100;\nlet chairRotation = 0;\n\nfunction drawChair() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  ctx.save();\n  ctx.translate(canvas.width / 2, canvas.height / 2);\n  ctx.rotate(chairRotation * Math.PI / 180);\n\n  // Draw chair legs\n  ctx.fillStyle = chairColor;\n  ctx.fillRect(-20, chairHeight - 20, 40, 20);\n  ctx.fillRect(-60, chairHeight, 20, -chairHeight + 20);\n  ctx.fillRect(40, chairHeight, 20, -chairHeight + 20);\n\n  // Draw chair seat\n  ctx.fillRect(-80, chairHeight - 40, 160, 20);\n\n  // Draw chair back\n  ctx.fillRect(-60, chairHeight - 120, 120, 20);\n  ctx.fillRect(-40, chairHeight - 120, 20, -80);\n  ctx.fillRect(20, chairHeight - 120, 20, -80);\n\n  ctx.restore();\n}\n\ncolorPicker.addEventListener(\'input\', () =\u003e {\n  chairColor = colorPicker.value;\n  drawChair();\n});\n\nheightSlider.addEventListener(\'input\', () =\u003e {\n  chairHeight = heightSlider.value;\n  drawChair();\n});\n\nrotateButton.addEventListener(\'click\', () =\u003e {\n  chairRotation = (chairRotation + 90) % 360;\n  drawChair();\n});\n\ndrawChair();\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e',
            additional_notes:
              'This solution uses only built-in JavaScript libraries and does not require any external dependencies.',
            installation_commands: 'null',
          },
        },
        {
          model: 'openai/gpt-4-1106-preview',
          completion: {
            files: {
              'index.js': {
                content:
                  "const colorPicker = document.getElementById('colorPicker');\nconst heightSlider = document.getElementById('heightSlider');\nconst rotateButton = document.getElementById('rotateButton');\nconst chairElement = document.getElementById('chair');\n\n// Change the color of the chair\ncolorPicker.addEventListener('input', (event) =\u003e {\n  chairElement.style.backgroundColor = event.target.value;\n});\n\n// Adjust the height of the chair\nheightSlider.addEventListener('input', (event) =\u003e {\n  chairElement.style.height = `${event.target.value}px`;\n});\n\n// Rotate the chair 360 degrees\nrotateButton.addEventListener('click', () =\u003e {\n  chairElement.style.transition = 'transform 2s';\n  chairElement.style.transform = 'rotateY(360deg)';\n  // Reset the rotation\n  setTimeout(() =\u003e {\n    chairElement.style.transition = '';\n    chairElement.style.transform = '';\n  }, 2000);\n});",
              },
              'index.html': {
                content:
                  "\u003c!DOCTYPE html\u003e\n\u003chtml lang='en'\u003e\n\u003chead\u003e\n    \u003cmeta charset='UTF-8'\u003e\n    \u003cmeta name='viewport' content='width=device-width, initial-scale=1.0'\u003e\n    \u003ctitle\u003eChair Visualization\u003c/title\u003e\n    \u003cstyle\u003e\n        #chair {\n            width: 100px;\n            height: 100px;\n            background-color: #555;\n            margin: 30px;\n            transition: background-color 0.5s;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cinput type='color' id='colorPicker'\u003e\n    \u003cinput type='range' id='heightSlider' min='50' max='200'\u003e\n    \u003cbutton id='rotateButton'\u003eRotate Chair\u003c/button\u003e\n    \u003cdiv id='chair'\u003e\u003c/div\u003e\n    \u003cscript src='index.js'\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e",
              },
              'package.json': {
                content: {
                  name: 'javascript',
                  scripts: {
                    build: 'parcel build ./index.html',
                    start: 'parcel ./index.html',
                  },
                  version: '1.0.0',
                  keywords: ['css', 'javascript'],
                  description: 'The JavaScript template',
                  devDependencies: {
                    eslint: '^7.2.0',
                    parcel: '^2.0.0',
                    'babel-eslint': '^10.1.0',
                  },
                },
              },
            },
            environment: 'server',
            sandbox_url: 'https://6h86ys.csb.app/',
            combined_html:
              "\u003c!DOCTYPE html\u003e\n\u003chtml lang='en'\u003e\n\u003chead\u003e\n    \u003cmeta charset='UTF-8'\u003e\n    \u003cmeta name='viewport' content='width=device-width, initial-scale=1.0'\u003e\n    \u003ctitle\u003eChair Visualization\u003c/title\u003e\n    \u003cstyle\u003e\n        #chair {\n            width: 100px;\n            height: 100px;\n            background-color: #555;\n            margin: 30px;\n            transition: background-color 0.5s;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cinput type='color' id='colorPicker'\u003e\n    \u003cinput type='range' id='heightSlider' min='50' max='200'\u003e\n    \u003cbutton id='rotateButton'\u003eRotate Chair\u003c/button\u003e\n    \u003cdiv id='chair'\u003e\u003c/div\u003e\n    \u003cscript src='index.js'\u003e\u003c/script\u003e\n\u003cscript\u003econst colorPicker = document.getElementById('colorPicker');\nconst heightSlider = document.getElementById('heightSlider');\nconst rotateButton = document.getElementById('rotateButton');\nconst chairElement = document.getElementById('chair');\n\n// Change the color of the chair\ncolorPicker.addEventListener('input', (event) =\u003e {\n  chairElement.style.backgroundColor = event.target.value;\n});\n\n// Adjust the height of the chair\nheightSlider.addEventListener('input', (event) =\u003e {\n  chairElement.style.height = `${event.target.value}px`;\n});\n\n// Rotate the chair 360 degrees\nrotateButton.addEventListener('click', () =\u003e {\n  chairElement.style.transition = 'transform 2s';\n  chairElement.style.transform = 'rotateY(360deg)';\n  // Reset the rotation\n  setTimeout(() =\u003e {\n    chairElement.style.transition = '';\n    chairElement.style.transform = '';\n  }, 2000);\n});\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e",
            additional_notes:
              'The code uses built-in libraries so no additional installation commands are required. The color picker, slider, and button are implemented using standard HTML elements, and the chair is a simple div styled with CSS.',
            installation_commands: 'null',
          },
        },
      ],
    },
    status: 'IN_PROGRESS',
    numResults: 2,
    maxResults: 2,
    numCriteria: 1,
    isCompletedByWorker: false,
  },
  {
    taskId: 'demo3',
    title: 'LLM Code Generation Task (Demo)',
    body: 'Create a web-based visualization of a phone using only JavaScript, HTML, and CSS. The phone should have the following interactive features:\n\n1. A power button that toggles the screen on and off.\n2. A volume slider that adjusts the volume level displayed on the screen.\n3. A home button that returns the screen to the home page.\n4. A keypad that allows users to input numbers, which are displayed on the screen.\n\nEnsure that you use only built-in JavaScript libraries.\nNote:\n- The visualization should be implemented in JavaScript with HTML and CSS.\n- Ensure that the output has both index.js and index.html files\n',
    expireAt: '2099-08-29T18:22:01Z',
    type: 'CODE_GENERATION',
    taskData: {
      task: 'CODE_GENERATION',
      prompt:
        'Create a web-based visualization of a phone using only JavaScript, HTML, and CSS. The phone should have the following interactive features:\n\n1. A power button that toggles the screen on and off.\n2. A volume slider that adjusts the volume level displayed on the screen.\n3. A home button that returns the screen to the home page.\n4. A keypad that allows users to input numbers, which are displayed on the screen.\n\nEnsure that you use only built-in JavaScript libraries.\nNote:\n- The visualization should be implemented in JavaScript with HTML and CSS.\n- Ensure that the output has both index.js and index.html files\n',
      criteria: [
        {
          max: 100,
          min: 1,
          type: 'multi-score',
          options: [
            'google/gemini-pro-1.0',
            'openai/gpt-4o',
            'anthropic/claude-3-sonnet-20240229',
            'anthropic/claude-3-opus-20240229',
          ],
        },
      ],
      responses: [
        {
          model: 'google/gemini-pro-1.0',
          completion: {
            files: {
              'index.js': {
                content:
                  'const powerButton = document.getElementById("power-button");\nconst screen = document.querySelector(".screen");\nconst homeButton = document.getElementById("home-button");\nconst callButton = document.getElementById("call-button");\nconst phoneNumber = document.getElementById("phone-number");\nconst volumeSlider = document.getElementById("volume-slider");\nconst keypadButtons = document.querySelectorAll(".keypad button");\n\nlet isScreenOn = false;\nlet currentNumber = "";\n\npowerButton.addEventListener("click", () =\u003e {\n  isScreenOn = !isScreenOn;\n  screen.classList.toggle("on");\n});\n\nhomeButton.addEventListener("click", () =\u003e {\n  screen.querySelectorAll(".screen-section").forEach((section) =\u003e {\n    section.classList.remove("active");\n  });\n  document.querySelector(".home-screen").classList.add("active");\n});\n\ncallButton.addEventListener("click", () =\u003e {\n  screen.querySelectorAll(".screen-section").forEach((section) =\u003e {\n    section.classList.remove("active");\n  });\n  document.querySelector(".call-screen").classList.add("active");\n  phoneNumber.textContent = currentNumber;\n  currentNumber = "";\n});\n\nvolumeSlider.addEventListener("input", () =\u003e {\n  const volume = volumeSlider.value;\n  screen.style.setProperty("--volume", volume / 100);\n});\n\nkeypadButtons.forEach((button) =\u003e {\n  button.addEventListener("click", () =\u003e {\n    const key = button.dataset.key;\n    currentNumber += key;\n    phoneNumber.textContent = currentNumber;\n  });\n});',
              },
              'style.css': {
                content:
                  'body {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background-color: #f0f0f0;\n  font-family: sans-serif;\n}\n\n.phone {\n  width: 300px;\n  height: 500px;\n  border-radius: 10px;\n  background-color: #fff;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  position: relative;\n}\n\n.screen {\n  width: 100%;\n  height: 80%;\n  background-color: #000;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: background-color 0.3s ease;\n}\n\n.screen.on {\n  background-color: #fff;\n  color: #000;\n}\n\n.screen-section {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.screen-section.active {\n  display: block;\n}\n\n.home-screen {\n  background-color: #fff;\n  color: #000;\n}\n\n.call-screen {\n  background-color: #000;\n  color: #fff;\n}\n\n.volume {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n}\n\n.buttons {\n  width: 100%;\n  height: 20%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\nbutton {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: none;\n  background-color: #007bff;\n  color: #fff;\n  font-size: 18px;\n  cursor: pointer;\n}\n\n.keypad {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}\n\n.keypad button {\n  background-color: #ccc;\n  color: #000;\n}',
              },
              'index.html': {
                content:
                  '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003ePhone Visualization\u003c/title\u003e\n    \u003clink rel="stylesheet" href="style.css"\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv class="phone"\u003e\n        \u003cdiv class="screen"\u003e\n            \u003cdiv class="home-screen"\u003e\n                \u003ch1\u003eHome Screen\u003c/h1\u003e\n            \u003c/div\u003e\n            \u003cdiv class="call-screen"\u003e\n                \u003ch2\u003eCalling...\u003c/h2\u003e\n                \u003cp id="phone-number"\u003e\u003c/p\u003e\n            \u003c/div\u003e\n            \u003cdiv class="volume"\u003e\n                \u003cinput type="range" min="0" max="100" value="50" id="volume-slider"\u003e\n                \u003clabel for="volume-slider"\u003eVolume\u003c/label\u003e\n            \u003c/div\u003e\n        \u003c/div\u003e\n        \u003cdiv class="buttons"\u003e\n            \u003cbutton id="power-button"\u003ePower\u003c/button\u003e\n            \u003cbutton id="home-button"\u003eHome\u003c/button\u003e\n            \u003cbutton id="call-button"\u003eCall\u003c/button\u003e\n            \u003cdiv class="keypad"\u003e\n                \u003cbutton data-key="1"\u003e1\u003c/button\u003e\n                \u003cbutton data-key="2"\u003e2\u003c/button\u003e\n                \u003cbutton data-key="3"\u003e3\u003c/button\u003e\n                \u003cbutton data-key="4"\u003e4\u003c/button\u003e\n                \u003cbutton data-key="5"\u003e5\u003c/button\u003e\n                \u003cbutton data-key="6"\u003e6\u003c/button\u003e\n                \u003cbutton data-key="7"\u003e7\u003c/button\u003e\n                \u003cbutton data-key="8"\u003e8\u003c/button\u003e\n                \u003cbutton data-key="9"\u003e9\u003c/button\u003e\n                \u003cbutton data-key="*"\u003e*\u003c/button\u003e\n                \u003cbutton data-key="0"\u003e0\u003c/button\u003e\n                \u003cbutton data-key="#"\u003e#\u003c/button\u003e\n            \u003c/div\u003e\n        \u003c/div\u003e\n    \u003c/div\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
              },
              'package.json': {
                content: {
                  name: 'javascript',
                  scripts: {
                    build: 'parcel build ./index.html',
                    start: 'parcel ./index.html',
                  },
                  version: '1.0.0',
                  keywords: ['css', 'javascript'],
                  description: 'The JavaScript template',
                  devDependencies: {
                    eslint: '^7.2.0',
                    parcel: '^2.0.0',
                    'babel-eslint': '^10.1.0',
                  },
                },
              },
            },
            environment: 'server',
            sandbox_url: 'https://wz6frc.csb.app/',
            combined_html:
              '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003ePhone Visualization\u003c/title\u003e\n    \u003clink rel="stylesheet" href="style.css"\u003e\n\u003cstyle\u003ebody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background-color: #f0f0f0;\n  font-family: sans-serif;\n}\n\n.phone {\n  width: 300px;\n  height: 500px;\n  border-radius: 10px;\n  background-color: #fff;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  position: relative;\n}\n\n.screen {\n  width: 100%;\n  height: 80%;\n  background-color: #000;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: background-color 0.3s ease;\n}\n\n.screen.on {\n  background-color: #fff;\n  color: #000;\n}\n\n.screen-section {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.screen-section.active {\n  display: block;\n}\n\n.home-screen {\n  background-color: #fff;\n  color: #000;\n}\n\n.call-screen {\n  background-color: #000;\n  color: #fff;\n}\n\n.volume {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n}\n\n.buttons {\n  width: 100%;\n  height: 20%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\nbutton {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: none;\n  background-color: #007bff;\n  color: #fff;\n  font-size: 18px;\n  cursor: pointer;\n}\n\n.keypad {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}\n\n.keypad button {\n  background-color: #ccc;\n  color: #000;\n}\u003c/style\u003e\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv class="phone"\u003e\n        \u003cdiv class="screen"\u003e\n            \u003cdiv class="home-screen"\u003e\n                \u003ch1\u003eHome Screen\u003c/h1\u003e\n            \u003c/div\u003e\n            \u003cdiv class="call-screen"\u003e\n                \u003ch2\u003eCalling...\u003c/h2\u003e\n                \u003cp id="phone-number"\u003e\u003c/p\u003e\n            \u003c/div\u003e\n            \u003cdiv class="volume"\u003e\n                \u003cinput type="range" min="0" max="100" value="50" id="volume-slider"\u003e\n                \u003clabel for="volume-slider"\u003eVolume\u003c/label\u003e\n            \u003c/div\u003e\n        \u003c/div\u003e\n        \u003cdiv class="buttons"\u003e\n            \u003cbutton id="power-button"\u003ePower\u003c/button\u003e\n            \u003cbutton id="home-button"\u003eHome\u003c/button\u003e\n            \u003cbutton id="call-button"\u003eCall\u003c/button\u003e\n            \u003cdiv class="keypad"\u003e\n                \u003cbutton data-key="1"\u003e1\u003c/button\u003e\n                \u003cbutton data-key="2"\u003e2\u003c/button\u003e\n                \u003cbutton data-key="3"\u003e3\u003c/button\u003e\n                \u003cbutton data-key="4"\u003e4\u003c/button\u003e\n                \u003cbutton data-key="5"\u003e5\u003c/button\u003e\n                \u003cbutton data-key="6"\u003e6\u003c/button\u003e\n                \u003cbutton data-key="7"\u003e7\u003c/button\u003e\n                \u003cbutton data-key="8"\u003e8\u003c/button\u003e\n                \u003cbutton data-key="9"\u003e9\u003c/button\u003e\n                \u003cbutton data-key="*"\u003e*\u003c/button\u003e\n                \u003cbutton data-key="0"\u003e0\u003c/button\u003e\n                \u003cbutton data-key="#"\u003e#\u003c/button\u003e\n            \u003c/div\u003e\n        \u003c/div\u003e\n    \u003c/div\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003cscript\u003econst powerButton = document.getElementById("power-button");\nconst screen = document.querySelector(".screen");\nconst homeButton = document.getElementById("home-button");\nconst callButton = document.getElementById("call-button");\nconst phoneNumber = document.getElementById("phone-number");\nconst volumeSlider = document.getElementById("volume-slider");\nconst keypadButtons = document.querySelectorAll(".keypad button");\n\nlet isScreenOn = false;\nlet currentNumber = "";\n\npowerButton.addEventListener("click", () =\u003e {\n  isScreenOn = !isScreenOn;\n  screen.classList.toggle("on");\n});\n\nhomeButton.addEventListener("click", () =\u003e {\n  screen.querySelectorAll(".screen-section").forEach((section) =\u003e {\n    section.classList.remove("active");\n  });\n  document.querySelector(".home-screen").classList.add("active");\n});\n\ncallButton.addEventListener("click", () =\u003e {\n  screen.querySelectorAll(".screen-section").forEach((section) =\u003e {\n    section.classList.remove("active");\n  });\n  document.querySelector(".call-screen").classList.add("active");\n  phoneNumber.textContent = currentNumber;\n  currentNumber = "";\n});\n\nvolumeSlider.addEventListener("input", () =\u003e {\n  const volume = volumeSlider.value;\n  screen.style.setProperty("--volume", volume / 100);\n});\n\nkeypadButtons.forEach((button) =\u003e {\n  button.addEventListener("click", () =\u003e {\n    const key = button.dataset.key;\n    currentNumber += key;\n    phoneNumber.textContent = currentNumber;\n  });\n});\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e',
            additional_notes:
              'This code uses only built-in JavaScript libraries and does not require any external dependencies.',
            installation_commands: 'null',
          },
        },
        {
          model: 'openai/gpt-4o',
          completion: {
            files: {
              'index.js': {
                content:
                  "document.addEventListener('DOMContentLoaded', function() {\n    const powerButton = document.getElementById('powerButton');\n    const volumeSlider = document.getElementById('volumeSlider');\n    const homeButton = document.getElementById('homeButton');\n    const keypadButtons = document.querySelectorAll('.keypad-button');\n    const screen = document.getElementById('screen');\n    const volumeDisplay = document.getElementById('volumeDisplay');\n    const numberDisplay = document.getElementById('numberDisplay');\n\n    let isScreenOn = false;\n\n    powerButton.addEventListener('click', function() {\n        isScreenOn = !isScreenOn;\n        screen.style.backgroundColor = isScreenOn ? 'white' : 'black';\n        numberDisplay.textContent = '';\n    });\n\n    volumeSlider.addEventListener('input', function() {\n        volumeDisplay.textContent = `Volume: ${volumeSlider.value}`;\n    });\n\n    homeButton.addEventListener('click', function() {\n        if (isScreenOn) {\n            numberDisplay.textContent = '';\n        }\n    });\n\n    keypadButtons.forEach(button =\u003e {\n        button.addEventListener('click', function() {\n            if (isScreenOn) {\n                numberDisplay.textContent += button.textContent;\n            }\n        });\n    });\n});",
              },
              'index.html': {
                content:
                  '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003ePhone Visualization\u003c/title\u003e\n    \u003cstyle\u003e\n        body { display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f0f0f0; }\n        .phone { width: 300px; height: 600px; border: 2px solid #000; border-radius: 20px; background-color: #333; position: relative; }\n        .screen { width: 260px; height: 460px; background-color: black; margin: 20px auto; border-radius: 10px; position: relative; color: white; display: flex; justify-content: center; align-items: center; font-size: 24px; }\n        .button { width: 50px; height: 50px; background-color: #555; border: none; border-radius: 50%; margin: 10px auto; display: block; }\n        .slider { width: 80%; margin: 10px auto; display: block; }\n        .keypad { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; padding: 10px; }\n        .keypad-button { width: 60px; height: 60px; background-color: #777; border: none; border-radius: 10px; font-size: 24px; color: white; }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv class="phone"\u003e\n        \u003cdiv id="screen" class="screen"\u003e\n            \u003cdiv id="numberDisplay"\u003e\u003c/div\u003e\n        \u003c/div\u003e\n        \u003cbutton id="powerButton" class="button"\u003e\u003c/button\u003e\n        \u003cinput id="volumeSlider" type="range" min="0" max="100" value="50" class="slider"\u003e\n        \u003cdiv id="volumeDisplay" class="screen"\u003eVolume: 50\u003c/div\u003e\n        \u003cbutton id="homeButton" class="button"\u003e\u003c/button\u003e\n        \u003cdiv class="keypad"\u003e\n            \u003cbutton class="keypad-button"\u003e1\u003c/button\u003e\n            \u003cbutton class="keypad-button"\u003e2\u003c/button\u003e\n            \u003cbutton class="keypad-button"\u003e3\u003c/button\u003e\n            \u003cbutton class="keypad-button"\u003e4\u003c/button\u003e\n            \u003cbutton class="keypad-button"\u003e5\u003c/button\u003e\n            \u003cbutton class="keypad-button"\u003e6\u003c/button\u003e\n            \u003cbutton class="keypad-button"\u003e7\u003c/button\u003e\n            \u003cbutton class="keypad-button"\u003e8\u003c/button\u003e\n            \u003cbutton class="keypad-button"\u003e9\u003c/button\u003e\n            \u003cbutton class="keypad-button"\u003e*\u003c/button\u003e\n            \u003cbutton class="keypad-button"\u003e0\u003c/button\u003e\n            \u003cbutton class="keypad-button"\u003e#\u003c/button\u003e\n        \u003c/div\u003e\n    \u003c/div\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
              },
              'package.json': {
                content: {
                  name: 'javascript',
                  scripts: {
                    build: 'parcel build ./index.html',
                    start: 'parcel ./index.html',
                  },
                  version: '1.0.0',
                  keywords: ['css', 'javascript'],
                  description: 'The JavaScript template',
                  devDependencies: {
                    eslint: '^7.2.0',
                    parcel: '^2.0.0',
                    'babel-eslint': '^10.1.0',
                  },
                },
              },
            },
            environment: 'server',
            sandbox_url: 'https://mh52rm.csb.app/',
            combined_html:
              '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003ePhone Visualization\u003c/title\u003e\n    \u003cstyle\u003e\n        body { display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f0f0f0; }\n        .phone { width: 300px; height: 600px; border: 2px solid #000; border-radius: 20px; background-color: #333; position: relative; }\n        .screen { width: 260px; height: 460px; background-color: black; margin: 20px auto; border-radius: 10px; position: relative; color: white; display: flex; justify-content: center; align-items: center; font-size: 24px; }\n        .button { width: 50px; height: 50px; background-color: #555; border: none; border-radius: 50%; margin: 10px auto; display: block; }\n        .slider { width: 80%; margin: 10px auto; display: block; }\n        .keypad { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; padding: 10px; }\n        .keypad-button { width: 60px; height: 60px; background-color: #777; border: none; border-radius: 10px; font-size: 24px; color: white; }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv class="phone"\u003e\n        \u003cdiv id="screen" class="screen"\u003e\n            \u003cdiv id="numberDisplay"\u003e\u003c/div\u003e\n        \u003c/div\u003e\n        \u003cbutton id="powerButton" class="button"\u003e\u003c/button\u003e\n        \u003cinput id="volumeSlider" type="range" min="0" max="100" value="50" class="slider"\u003e\n        \u003cdiv id="volumeDisplay" class="screen"\u003eVolume: 50\u003c/div\u003e\n        \u003cbutton id="homeButton" class="button"\u003e\u003c/button\u003e\n        \u003cdiv class="keypad"\u003e\n            \u003cbutton class="keypad-button"\u003e1\u003c/button\u003e\n            \u003cbutton class="keypad-button"\u003e2\u003c/button\u003e\n            \u003cbutton class="keypad-button"\u003e3\u003c/button\u003e\n            \u003cbutton class="keypad-button"\u003e4\u003c/button\u003e\n            \u003cbutton class="keypad-button"\u003e5\u003c/button\u003e\n            \u003cbutton class="keypad-button"\u003e6\u003c/button\u003e\n            \u003cbutton class="keypad-button"\u003e7\u003c/button\u003e\n            \u003cbutton class="keypad-button"\u003e8\u003c/button\u003e\n            \u003cbutton class="keypad-button"\u003e9\u003c/button\u003e\n            \u003cbutton class="keypad-button"\u003e*\u003c/button\u003e\n            \u003cbutton class="keypad-button"\u003e0\u003c/button\u003e\n            \u003cbutton class="keypad-button"\u003e#\u003c/button\u003e\n        \u003c/div\u003e\n    \u003c/div\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003cscript\u003edocument.addEventListener(\'DOMContentLoaded\', function() {\n    const powerButton = document.getElementById(\'powerButton\');\n    const volumeSlider = document.getElementById(\'volumeSlider\');\n    const homeButton = document.getElementById(\'homeButton\');\n    const keypadButtons = document.querySelectorAll(\'.keypad-button\');\n    const screen = document.getElementById(\'screen\');\n    const volumeDisplay = document.getElementById(\'volumeDisplay\');\n    const numberDisplay = document.getElementById(\'numberDisplay\');\n\n    let isScreenOn = false;\n\n    powerButton.addEventListener(\'click\', function() {\n        isScreenOn = !isScreenOn;\n        screen.style.backgroundColor = isScreenOn ? \'white\' : \'black\';\n        numberDisplay.textContent = \'\';\n    });\n\n    volumeSlider.addEventListener(\'input\', function() {\n        volumeDisplay.textContent = `Volume: ${volumeSlider.value}`;\n    });\n\n    homeButton.addEventListener(\'click\', function() {\n        if (isScreenOn) {\n            numberDisplay.textContent = \'\';\n        }\n    });\n\n    keypadButtons.forEach(button =\u003e {\n        button.addEventListener(\'click\', function() {\n            if (isScreenOn) {\n                numberDisplay.textContent += button.textContent;\n            }\n        });\n    });\n});\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e',
            additional_notes: 'The code uses built-in JavaScript libraries so no additional commands are required.',
            installation_commands: 'null',
          },
        },
        {
          model: 'anthropic/claude-3-sonnet-20240229',
          completion: {
            files: {
              'index.js': {
                content:
                  "const screen = document.getElementById('screen');\nconst powerButton = document.getElementById('powerButton');\nconst volumeSlider = document.getElementById('volumeSlider');\nconst homeButton = document.getElementById('homeButton');\nconst keypadButtons = document.querySelectorAll('.keypad button');\n\nlet isScreenOn = true;\nlet volume = 50;\nlet displayText = '';\n\npowerButton.addEventListener('click', () =\u003e {\n  isScreenOn = !isScreenOn;\n  screen.style.backgroundColor = isScreenOn ? '#000' : '#ccc';\n  screen.style.color = isScreenOn ? '#fff' : '#333';\n  screen.textContent = isScreenOn ? displayText : 'Screen Off';\n});\n\nvolumeSlider.addEventListener('input', () =\u003e {\n  volume = volumeSlider.value;\n  screen.textContent = `Volume: ${volume}`;\n});\n\nhomeButton.addEventListener('click', () =\u003e {\n  displayText = 'Home';\n  screen.textContent = displayText;\n});\n\nkeypadButtons.forEach(button =\u003e {\n  button.addEventListener('click', () =\u003e {\n    displayText += button.textContent;\n    screen.textContent = displayText;\n  });\n});",
              },
              'index.html': {
                content:
                  '\u003c!DOCTYPE html\u003e\n\u003chtml\u003e\n\u003chead\u003e\n  \u003ctitle\u003ePhone Visualization\u003c/title\u003e\n  \u003cstyle\u003e\n    body {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      height: 100vh;\n      margin: 0;\n    }\n\n    .phone {\n      width: 300px;\n      height: 600px;\n      border: 2px solid black;\n      border-radius: 20px;\n      background-color: #333;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      padding: 20px;\n      box-sizing: border-box;\n    }\n\n    .screen {\n      width: 100%;\n      height: 80%;\n      background-color: #000;\n      border-radius: 10px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      color: #fff;\n      font-size: 24px;\n      font-family: monospace;\n    }\n\n    .controls {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n    }\n\n    .volume-slider {\n      width: 100px;\n    }\n\n    .keypad {\n      display: grid;\n      grid-template-columns: repeat(3, 1fr);\n      grid-gap: 10px;\n    }\n\n    .keypad button {\n      width: 50px;\n      height: 50px;\n      font-size: 18px;\n    }\n  \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n  \u003cdiv class="phone"\u003e\n    \u003cdiv class="screen" id="screen"\u003eHome\u003c/div\u003e\n    \u003cdiv class="controls"\u003e\n      \u003cbutton id="powerButton"\u003ePower\u003c/button\u003e\n      \u003cinput type="range" min="0" max="100" value="50" class="volume-slider" id="volumeSlider"\u003e\n      \u003cbutton id="homeButton"\u003eHome\u003c/button\u003e\n    \u003c/div\u003e\n    \u003cdiv class="keypad"\u003e\n      \u003cbutton\u003e1\u003c/button\u003e\n      \u003cbutton\u003e2\u003c/button\u003e\n      \u003cbutton\u003e3\u003c/button\u003e\n      \u003cbutton\u003e4\u003c/button\u003e\n      \u003cbutton\u003e5\u003c/button\u003e\n      \u003cbutton\u003e6\u003c/button\u003e\n      \u003cbutton\u003e7\u003c/button\u003e\n      \u003cbutton\u003e8\u003c/button\u003e\n      \u003cbutton\u003e9\u003c/button\u003e\n      \u003cbutton\u003e*\u003c/button\u003e\n      \u003cbutton\u003e0\u003c/button\u003e\n      \u003cbutton\u003e#\u003c/button\u003e\n    \u003c/div\u003e\n  \u003c/div\u003e\n  \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
              },
              'package.json': {
                content: {
                  name: 'javascript',
                  scripts: {
                    build: 'parcel build ./index.html',
                    start: 'parcel ./index.html',
                  },
                  version: '1.0.0',
                  keywords: ['css', 'javascript'],
                  description: 'The JavaScript template',
                  devDependencies: {
                    eslint: '^7.2.0',
                    parcel: '^2.0.0',
                    'babel-eslint': '^10.1.0',
                  },
                },
              },
            },
            environment: 'server',
            sandbox_url: 'https://glcf3c.csb.app/',
            combined_html:
              "\u003c!DOCTYPE html\u003e\n\u003chtml\u003e\n\u003chead\u003e\n  \u003ctitle\u003ePhone Visualization\u003c/title\u003e\n  \u003cstyle\u003e\n    body {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      height: 100vh;\n      margin: 0;\n    }\n\n    .phone {\n      width: 300px;\n      height: 600px;\n      border: 2px solid black;\n      border-radius: 20px;\n      background-color: #333;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      padding: 20px;\n      box-sizing: border-box;\n    }\n\n    .screen {\n      width: 100%;\n      height: 80%;\n      background-color: #000;\n      border-radius: 10px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      color: #fff;\n      font-size: 24px;\n      font-family: monospace;\n    }\n\n    .controls {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n    }\n\n    .volume-slider {\n      width: 100px;\n    }\n\n    .keypad {\n      display: grid;\n      grid-template-columns: repeat(3, 1fr);\n      grid-gap: 10px;\n    }\n\n    .keypad button {\n      width: 50px;\n      height: 50px;\n      font-size: 18px;\n    }\n  \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n  \u003cdiv class=\"phone\"\u003e\n    \u003cdiv class=\"screen\" id=\"screen\"\u003eHome\u003c/div\u003e\n    \u003cdiv class=\"controls\"\u003e\n      \u003cbutton id=\"powerButton\"\u003ePower\u003c/button\u003e\n      \u003cinput type=\"range\" min=\"0\" max=\"100\" value=\"50\" class=\"volume-slider\" id=\"volumeSlider\"\u003e\n      \u003cbutton id=\"homeButton\"\u003eHome\u003c/button\u003e\n    \u003c/div\u003e\n    \u003cdiv class=\"keypad\"\u003e\n      \u003cbutton\u003e1\u003c/button\u003e\n      \u003cbutton\u003e2\u003c/button\u003e\n      \u003cbutton\u003e3\u003c/button\u003e\n      \u003cbutton\u003e4\u003c/button\u003e\n      \u003cbutton\u003e5\u003c/button\u003e\n      \u003cbutton\u003e6\u003c/button\u003e\n      \u003cbutton\u003e7\u003c/button\u003e\n      \u003cbutton\u003e8\u003c/button\u003e\n      \u003cbutton\u003e9\u003c/button\u003e\n      \u003cbutton\u003e*\u003c/button\u003e\n      \u003cbutton\u003e0\u003c/button\u003e\n      \u003cbutton\u003e#\u003c/button\u003e\n    \u003c/div\u003e\n  \u003c/div\u003e\n  \u003cscript src=\"index.js\"\u003e\u003c/script\u003e\n\u003cscript\u003econst screen = document.getElementById('screen');\nconst powerButton = document.getElementById('powerButton');\nconst volumeSlider = document.getElementById('volumeSlider');\nconst homeButton = document.getElementById('homeButton');\nconst keypadButtons = document.querySelectorAll('.keypad button');\n\nlet isScreenOn = true;\nlet volume = 50;\nlet displayText = '';\n\npowerButton.addEventListener('click', () =\u003e {\n  isScreenOn = !isScreenOn;\n  screen.style.backgroundColor = isScreenOn ? '#000' : '#ccc';\n  screen.style.color = isScreenOn ? '#fff' : '#333';\n  screen.textContent = isScreenOn ? displayText : 'Screen Off';\n});\n\nvolumeSlider.addEventListener('input', () =\u003e {\n  volume = volumeSlider.value;\n  screen.textContent = `Volume: ${volume}`;\n});\n\nhomeButton.addEventListener('click', () =\u003e {\n  displayText = 'Home';\n  screen.textContent = displayText;\n});\n\nkeypadButtons.forEach(button =\u003e {\n  button.addEventListener('click', () =\u003e {\n    displayText += button.textContent;\n    screen.textContent = displayText;\n  });\n});\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e",
            additional_notes:
              'This solution uses only built-in JavaScript, HTML, and CSS without any external libraries.',
            installation_commands: 'null',
          },
        },
        {
          model: 'anthropic/claude-3-opus-20240229',
          completion: {
            files: {
              'index.js': {
                content:
                  "const screen = document.querySelector('.screen');\nconst powerButton = document.querySelector('.power-button');\nconst volumeSlider = document.querySelector('.volume-slider');\nconst homeButton = document.querySelector('.home-button');\nconst keypadButtons = document.querySelectorAll('.keypad button');\n\nlet isScreenOn = true;\nlet inputValue = '';\n\nfunction updateScreen() {\n  if (isScreenOn) {\n    screen.textContent = inputValue || 'Home';\n  } else {\n    screen.textContent = '';\n  }\n}\n\npowerButton.addEventListener('click', () =\u003e {\n  isScreenOn = !isScreenOn;\n  updateScreen();\n});\n\nvolumeSlider.addEventListener('input', () =\u003e {\n  if (isScreenOn) {\n    screen.textContent = `Volume: ${volumeSlider.value}%`;\n  }\n});\n\nhomeButton.addEventListener('click', () =\u003e {\n  if (isScreenOn) {\n    inputValue = '';\n    updateScreen();\n  }\n});\n\nkeypadButtons.forEach(button =\u003e {\n  button.addEventListener('click', () =\u003e {\n    if (isScreenOn) {\n      inputValue += button.textContent;\n      updateScreen();\n    }\n  });\n});\n\nupdateScreen();",
              },
              'index.html': {
                content:
                  '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n  \u003cmeta charset="UTF-8"\u003e\n  \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n  \u003ctitle\u003ePhone Visualization\u003c/title\u003e\n  \u003cstyle\u003e\n    .phone {\n      width: 300px;\n      height: 500px;\n      border: 2px solid black;\n      border-radius: 20px;\n      margin: 50px auto;\n      position: relative;\n      background-color: #f1f1f1;\n    }\n\n    .screen {\n      width: 90%;\n      height: 60%;\n      background-color: black;\n      margin: 20px auto;\n      border-radius: 10px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      color: white;\n      font-size: 24px;\n    }\n\n    .power-button {\n      width: 10px;\n      height: 50px;\n      background-color: black;\n      position: absolute;\n      top: 100px;\n      right: -10px;\n      border-radius: 5px;\n    }\n\n    .volume-slider {\n      width: 80%;\n      margin: 10px auto;\n    }\n\n    .home-button {\n      width: 50px;\n      height: 50px;\n      border-radius: 50%;\n      background-color: white;\n      border: 2px solid black;\n      position: absolute;\n      bottom: 20px;\n      left: 50%;\n      transform: translateX(-50%);\n    }\n\n    .keypad {\n      display: grid;\n      grid-template-columns: repeat(3, 1fr);\n      grid-gap: 10px;\n      margin: 20px;\n    }\n\n    .keypad button {\n      background-color: white;\n      border: 1px solid black;\n      border-radius: 5px;\n      font-size: 18px;\n      padding: 10px;\n    }\n  \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n  \u003cdiv class="phone"\u003e\n    \u003cdiv class="screen"\u003e\u003c/div\u003e\n    \u003cdiv class="power-button"\u003e\u003c/div\u003e\n    \u003cinput type="range" min="0" max="100" value="50" class="volume-slider"\u003e\n    \u003cdiv class="home-button"\u003e\u003c/div\u003e\n    \u003cdiv class="keypad"\u003e\n      \u003cbutton\u003e1\u003c/button\u003e\n      \u003cbutton\u003e2\u003c/button\u003e\n      \u003cbutton\u003e3\u003c/button\u003e\n      \u003cbutton\u003e4\u003c/button\u003e\n      \u003cbutton\u003e5\u003c/button\u003e\n      \u003cbutton\u003e6\u003c/button\u003e\n      \u003cbutton\u003e7\u003c/button\u003e\n      \u003cbutton\u003e8\u003c/button\u003e\n      \u003cbutton\u003e9\u003c/button\u003e\n      \u003cbutton\u003e*\u003c/button\u003e\n      \u003cbutton\u003e0\u003c/button\u003e\n      \u003cbutton\u003e#\u003c/button\u003e\n    \u003c/div\u003e\n  \u003c/div\u003e\n\n  \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
              },
              'package.json': {
                content: {
                  name: 'javascript',
                  scripts: {
                    build: 'parcel build ./index.html',
                    start: 'parcel ./index.html',
                  },
                  version: '1.0.0',
                  keywords: ['css', 'javascript'],
                  description: 'The JavaScript template',
                  devDependencies: {
                    eslint: '^7.2.0',
                    parcel: '^2.0.0',
                    'babel-eslint': '^10.1.0',
                  },
                },
              },
            },
            environment: 'server',
            sandbox_url: 'https://l944cl.csb.app/',
            combined_html:
              '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n  \u003cmeta charset="UTF-8"\u003e\n  \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n  \u003ctitle\u003ePhone Visualization\u003c/title\u003e\n  \u003cstyle\u003e\n    .phone {\n      width: 300px;\n      height: 500px;\n      border: 2px solid black;\n      border-radius: 20px;\n      margin: 50px auto;\n      position: relative;\n      background-color: #f1f1f1;\n    }\n\n    .screen {\n      width: 90%;\n      height: 60%;\n      background-color: black;\n      margin: 20px auto;\n      border-radius: 10px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      color: white;\n      font-size: 24px;\n    }\n\n    .power-button {\n      width: 10px;\n      height: 50px;\n      background-color: black;\n      position: absolute;\n      top: 100px;\n      right: -10px;\n      border-radius: 5px;\n    }\n\n    .volume-slider {\n      width: 80%;\n      margin: 10px auto;\n    }\n\n    .home-button {\n      width: 50px;\n      height: 50px;\n      border-radius: 50%;\n      background-color: white;\n      border: 2px solid black;\n      position: absolute;\n      bottom: 20px;\n      left: 50%;\n      transform: translateX(-50%);\n    }\n\n    .keypad {\n      display: grid;\n      grid-template-columns: repeat(3, 1fr);\n      grid-gap: 10px;\n      margin: 20px;\n    }\n\n    .keypad button {\n      background-color: white;\n      border: 1px solid black;\n      border-radius: 5px;\n      font-size: 18px;\n      padding: 10px;\n    }\n  \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n  \u003cdiv class="phone"\u003e\n    \u003cdiv class="screen"\u003e\u003c/div\u003e\n    \u003cdiv class="power-button"\u003e\u003c/div\u003e\n    \u003cinput type="range" min="0" max="100" value="50" class="volume-slider"\u003e\n    \u003cdiv class="home-button"\u003e\u003c/div\u003e\n    \u003cdiv class="keypad"\u003e\n      \u003cbutton\u003e1\u003c/button\u003e\n      \u003cbutton\u003e2\u003c/button\u003e\n      \u003cbutton\u003e3\u003c/button\u003e\n      \u003cbutton\u003e4\u003c/button\u003e\n      \u003cbutton\u003e5\u003c/button\u003e\n      \u003cbutton\u003e6\u003c/button\u003e\n      \u003cbutton\u003e7\u003c/button\u003e\n      \u003cbutton\u003e8\u003c/button\u003e\n      \u003cbutton\u003e9\u003c/button\u003e\n      \u003cbutton\u003e*\u003c/button\u003e\n      \u003cbutton\u003e0\u003c/button\u003e\n      \u003cbutton\u003e#\u003c/button\u003e\n    \u003c/div\u003e\n  \u003c/div\u003e\n\n  \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003cscript\u003econst screen = document.querySelector(\'.screen\');\nconst powerButton = document.querySelector(\'.power-button\');\nconst volumeSlider = document.querySelector(\'.volume-slider\');\nconst homeButton = document.querySelector(\'.home-button\');\nconst keypadButtons = document.querySelectorAll(\'.keypad button\');\n\nlet isScreenOn = true;\nlet inputValue = \'\';\n\nfunction updateScreen() {\n  if (isScreenOn) {\n    screen.textContent = inputValue || \'Home\';\n  } else {\n    screen.textContent = \'\';\n  }\n}\n\npowerButton.addEventListener(\'click\', () =\u003e {\n  isScreenOn = !isScreenOn;\n  updateScreen();\n});\n\nvolumeSlider.addEventListener(\'input\', () =\u003e {\n  if (isScreenOn) {\n    screen.textContent = `Volume: ${volumeSlider.value}%`;\n  }\n});\n\nhomeButton.addEventListener(\'click\', () =\u003e {\n  if (isScreenOn) {\n    inputValue = \'\';\n    updateScreen();\n  }\n});\n\nkeypadButtons.forEach(button =\u003e {\n  button.addEventListener(\'click\', () =\u003e {\n    if (isScreenOn) {\n      inputValue += button.textContent;\n      updateScreen();\n    }\n  });\n});\n\nupdateScreen();\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e',
            additional_notes:
              'The code uses only built-in JavaScript libraries and does not require any additional installation commands. The phone visualization is implemented using HTML, CSS, and JavaScript, with interactive features such as a power button, volume slider, home button, and keypad. The screen displays the input from the keypad or the home page based on user interactions.',
            installation_commands: '',
          },
        },
      ],
    },
    status: 'IN_PROGRESS',
    numResults: 1,
    maxResults: 4,
    numCriteria: 1,
    isCompletedByWorker: true,
  },
];

export const tasklistFull: Task[] = tasklistCodegen.concat(task3d);
