import { Task } from '@/types/QuestionPageTypes';

export type TaskType = 'CODE_GENERATION' | '3D_MODEL' | 'TEXT_TO_IMAGE';

export const taskTTI: Task[] = [
  {
    taskId: 'demo6',
    title: 'Text to Image Task',
    body: 'Text to Image',
    expireAt: '2024-12-03T15:04:00Z',
    type: 'TEXT_TO_IMAGE',
    taskData: {
      task: 'TEXT_TO_IMAGE',
      prompt: 'an image of a green dog.',
      criteria: [
        {
          type: 'multi-select',
          label: 'Choose the most appropriate options',
          options: ['Safe For Work (SFW)', 'High quality', "I have no idea what i'm looking at", 'Almost there'],
        },
        {
          type: 'single-select',
          label: 'I would use this image for a dog shampoo commercial.',
          options: ['Agree', 'Disagree', 'Neutral'],
        },
        {
          max: 10,
          min: 1,
          type: 'multi-score',
          label: 'Accurate',
          options: ['stabilityai/stable-diffusion-xl-base-1.0'],
        },
        {
          max: 10,
          min: 1,
          type: 'multi-score',
          label: 'Realism',
          options: ['stabilityai/stable-diffusion-xl-base-1.0'],
        },
        {
          max: 10,
          min: 1,
          type: 'multi-score',
          label: 'Noise',
          options: ['stabilityai/stable-diffusion-xl-base-1.0'],
        },
      ],
      responses: [
        {
          model: 'stabilityai/stable-diffusion-xl-base-1.0',
          completion: {
            url: 'dojo-files-dev.tensorplex.dev/green_dog1_1725473319573771791.png',
            filename: 'green_dog1.png',
          },
        },
      ],
    },
    status: 'IN_PROGRESS',
    numResults: 0,
    maxResults: 10,
    numCriteria: 4,
    isCompletedByWorker: false,
  },
];

// export const taskTTIBackup: Task[] = [
//   {
//     taskId: 'demo6',
//     title: 'Text to Image Task',
//     body: 'Text to Image',
//     expireAt: '2024-12-03T15:04:00Z',
//     type: 'TEXT_TO_IMAGE',
//     taskData: {
//       task: 'TEXT_TO_IMAGE',
//       prompt: 'A bottle with the cap half opened.',
//       criteria: [
//         {
//           type: 'ranking',
//           options: ['Image 1', 'Image 2'],
//         },
//         {
//           type: 'multi-select',
//           options: ['The image is Safe For Work (SFW).', 'The image is high quality.'],
//         },
//         {
//           max: 10,
//           min: 1,
//           type: 'score',
//         },
//         {
//           max: 10,
//           min: 1,
//           type: 'multi-score',
//           options: ['Image 1', 'Image 2'],
//         },
//       ],
//       responses: [
//         {
//           model: 'stabilityai/stable-diffusion-xl-base-1.0',
//           completion: {
//             url: 'https://dojo-files-dev.tensorplex.dev/demo/bottleCapHalfOpened1.png',
//             filename: 'bottleCapHalfOpened1.png',
//           },
//         },
//         {
//           model: 'runwayml/stable-diffusion-v1-5',
//           completion: {
//             url: 'https://dojo-files-dev.tensorplex.dev/demo/bottleCapHalfOpened2.png',
//             filename: 'green_dog1.bottleCapHalfOpened2',
//           },
//         },
//       ],
//     },
//     status: 'IN_PROGRESS',
//     numResults: 0,
//     maxResults: 10,
//     numCriteria: 4,
//     isCompletedByWorker: false,
//   },
//   {
//     taskId: 'demo6',
//     title: 'Text to Image Task',
//     body: 'Text to Image',
//     expireAt: '2024-12-03T15:04:00Z',
//     type: 'TEXT_TO_IMAGE',
//     taskData: {
//       task: 'TEXT_TO_IMAGE',
//       prompt: 'an image of a green dog.',
//       criteria: [
//         {
//           type: 'ranking',
//           options: ['Image 1', 'Image 2'],
//         },
//         {
//           type: 'multi-select',
//           options: ['The image is Safe For Work (SFW).', 'The image is high quality.'],
//         },
//         {
//           max: 10,
//           min: 1,
//           type: 'score',
//         },
//         {
//           max: 10,
//           min: 1,
//           type: 'multi-score',
//           options: ['Image 1', 'Image 2'],
//         },
//       ],
//       responses: [
//         {
//           model: 'stabilityai/stable-diffusion-xl-base-1.0',
//           completion: {
//             url: 'dojo-files-dev.tensorplex.dev/green_dog1_1725473319573771791.png',
//             filename: 'green_dog1.png',
//           },
//         },
//         {
//           model: 'runwayml/stable-diffusion-v1-5',
//           completion: {
//             url: 'dojo-files-dev.tensorplex.dev/green_dog2_1725473319722089490.png',
//             filename: 'green_dog1.png',
//           },
//         },
//       ],
//     },
//     status: 'IN_PROGRESS',
//     numResults: 0,
//     maxResults: 10,
//     numCriteria: 4,
//     isCompletedByWorker: false,
//   },
//   {
//     taskId: 'demo6',
//     title: 'Text to Image Task',
//     body: 'Text to Image',
//     expireAt: '2024-12-03T15:04:00Z',
//     type: 'TEXT_TO_IMAGE',
//     taskData: {
//       task: 'TEXT_TO_IMAGE',
//       prompt: 'an office with full height windows with the cityline in the background.',
//       criteria: [
//         {
//           type: 'ranking',
//           options: ['Image 1', 'Image 2'],
//         },
//         {
//           type: 'multi-select',
//           options: ['The image is Safe For Work (SFW).', 'The image is high quality.'],
//         },
//         {
//           max: 10,
//           min: 1,
//           type: 'score',
//         },
//         {
//           max: 10,
//           min: 1,
//           type: 'multi-score',
//           options: ['Image 1', 'Image 2'],
//         },
//       ],
//       responses: [
//         {
//           model: 'stabilityai/stable-diffusion-xl-base-1.0',
//           completion: {
//             url: 'https://dojo-files-dev.tensorplex.dev/demo/officeFullWindowCityline2.png',
//             filename: 'officeFullWindowCityline2.png',
//           },
//         },
//         {
//           model: 'runwayml/stable-diffusion-v1-5',
//           completion: {
//             url: 'https://dojo-files-dev.tensorplex.dev/demo/officeFullWindowCityline1.png',
//             filename: 'officeFullWindowCityline1.png',
//           },
//         },
//       ],
//     },
//     status: 'IN_PROGRESS',
//     numResults: 0,
//     maxResults: 10,
//     numCriteria: 4,
//     isCompletedByWorker: false,
//   },
//   {
//     taskId: 'demo6',
//     title: 'Text to Image Task',
//     body: 'Text to Image',
//     expireAt: '2024-12-03T15:04:00Z',
//     type: 'TEXT_TO_IMAGE',
//     taskData: {
//       task: 'TEXT_TO_IMAGE',
//       prompt: 'NYSE floor with emotions and red and green charts.',
//       criteria: [
//         {
//           type: 'ranking',
//           options: ['Image 1', 'Image 2'],
//         },
//         {
//           type: 'multi-select',
//           options: ['The image is Safe For Work (SFW).', 'The image is high quality.'],
//         },
//         {
//           max: 10,
//           min: 1,
//           type: 'score',
//         },
//         {
//           max: 10,
//           min: 1,
//           type: 'multi-score',
//           options: ['Image 1', 'Image 2'],
//         },
//       ],
//       responses: [
//         {
//           model: 'stabilityai/stable-diffusion-xl-base-1.0',
//           completion: {
//             url: 'https://dojo-files-dev.tensorplex.dev/demo/NYSEWithEmotionsAndRedGreenCharts1.png',
//             filename: 'NYSEWithEmotionsAndRedGreenCharts1.png',
//           },
//         },
//         {
//           model: 'runwayml/stable-diffusion-v1-5',
//           completion: {
//             url: 'https://dojo-files-dev.tensorplex.dev/demo/NYSEWithEmotionsAndRedGreenCharts2.png',
//             filename: 'NYSEWithEmotionsAndRedGreenCharts2.png',
//           },
//         },
//       ],
//     },
//     status: 'IN_PROGRESS',
//     numResults: 0,
//     maxResults: 10,
//     numCriteria: 4,
//     isCompletedByWorker: false,
//   },
// ];

// Demo data for codes
export const task3d: Task[] = [
  {
    taskId: 'demo8-3d',
    title: 'LLM 3D Model Task (Demo)',
    body: 'Crisp Lettuce in a bowl.',
    expireAt: '2099-12-03T15:04:00Z',
    type: '3D_MODEL',
    taskData: {
      task: '3D_MODEL',
      prompt: 'Crisp Lettuce in a bowl.',
      criteria: [
        {
          max: 100,
          min: 1,
          type: 'multi-score',
          options: [
            'stabilityai/stable-diffusion-xl-base-1.0',
            'runwayml/stable-diffusion-v1-5',
            'yourm/stable-diffusion-v0-2',
            'dllm/sd-extra-0.3',
          ],
        },
      ],
      responses: [
        {
          model: 'stabilityai/stable-diffusion-xl-base-1.0',
          completion: {
            url: 'https://dojo-files-dev.tensorplex.dev/demo/crisp_lettuce_in_bowl.5G6NHLWHx9qqDid5J8w8K8MCyJzny2b1KDYuHtMStjHMpdsL.ply',
          },
        },
        {
          model: 'runwayml/stable-diffusion-v1-5',
          completion: {
            url: 'https://dojo-files-dev.tensorplex.dev/demo/crisp_lettuce_in_bowl.5DCq8TQ4JQh2r5TGoMx18qzgFQadvqHdwmP8EWiTM1eb3VKk.ply',
          },
        },
        {
          model: 'yourm/stable-diffusion-v0-2',
          completion: {
            url: 'https://dojo-files-dev.tensorplex.dev/demo/crisp_lettuce_in_bowl.5EfRE6UGyeJYd8cTPJnZVBc4GwjMpGfik3U4cNBnp6Skjd2T.ply',
          },
        },
        {
          model: 'dllm/sd-extra-0.3',
          completion: {
            url: 'https://dojo-files-dev.tensorplex.dev/demo/crisp_lettuce_in_bowl.5CStaWfMH2E7oVGgGZsC2pDqgGjRjgy3Mjtq8eUrEL5Wwhg1.ply',
          },
        },
      ],
    },
    status: 'IN_PROGRESS',
    maxResults: 10,
    numResults: 2,
    numCriteria: 4,
    isCompletedByWorker: false,
  },
  {
    taskId: 'demo9-3d',
    title: 'LLM 3D Model Task (Demo)',
    body: 'Delicate Ivory dove in flight',
    expireAt: '2099-12-03T15:04:00Z',
    type: '3D_MODEL',
    taskData: {
      task: '3D_MODEL',
      prompt: 'Delicate Ivory dove in flight',
      criteria: [
        {
          max: 100,
          min: 1,
          type: 'multi-score',
          options: [
            'stabilityai/stable-diffusion-xl-base-1.0',
            'runwayml/stable-diffusion-v1-5',
            'yourm/stable-diffusion-v0-2',
            'dllm/sd-extra-0.3',
          ],
        },
      ],
      responses: [
        {
          model: 'stabilityai/stable-diffusion-xl-base-1.0',
          completion: {
            url: 'https://dojo-files-dev.tensorplex.dev/demo/delicate_ivory_dove_in_flight_pose.5CAiiURk1jVeLmMNTFyHEhxzR3SU3UnJyZZHnUMMN35aJqGn.ply',
          },
        },
        {
          model: 'runwayml/stable-diffusion-v1-5',
          completion: {
            url: 'https://dojo-files-dev.tensorplex.dev/demo/delicate_ivory_dove_in_flight_pose.5EUprUJg7c2FbL2QRoJQBH2yDGqJtWSuDEjiCgYzcUfEkHkH.ply',
          },
        },
        {
          model: 'yourm/stable-diffusion-v0-2',
          completion: {
            url: 'https://dojo-files-dev.tensorplex.dev/demo/delicate_ivory_dove_in_flight_pose.5FjreG2tJURByXbFUhQ1R9o3TdXgqKFgjGmVaYwFrVpzmEWH.ply',
          },
        },
        {
          model: 'dllm/sd-extra-0.3',
          completion: {
            url: 'https://dojo-files-dev.tensorplex.dev/demo/delicate_ivory_dove_in_flight_pose.5H3WL3VFN3kG6aWugfSgZThkwgpnKWuQrpNFp8VMwRVtV6CM.ply',
          },
        },
      ],
    },
    status: 'IN_PROGRESS',
    maxResults: 10,
    numResults: 5,
    numCriteria: 4,
    isCompletedByWorker: false,
  },
  {
    taskId: 'demo10-3d',
    title: 'LLM 3D Model Task (Demo)',
    body: 'Black fururistic flying taxi drone',
    expireAt: '2099-12-03T15:04:00Z',
    type: '3D_MODEL',
    taskData: {
      task: '3D_MODEL',
      prompt: 'Black fururistic flying taxi drone',
      criteria: [
        {
          max: 100,
          min: 1,
          type: 'multi-score',
          options: [
            'stabilityai/stable-diffusion-xl-base-1.0',
            'runwayml/stable-diffusion-v1-5',
            'yourm/stable-diffusion-v0-2',
            'dllm/sd-extra-0.3',
          ],
        },
      ],
      responses: [
        {
          model: 'stabilityai/stable-diffusion-xl-base-1.0',
          completion: {
            url: 'https://dojo-files-dev.tensorplex.dev/demo/black_futuristic_flying_taxi_drone.5D7Hab1M1NRiDUGnpoJiFMR2r2tSZjn8WfWbYeoF7BBJQ8nW.ply',
          },
        },
        {
          model: 'runwayml/stable-diffusion-v1-5',
          completion: {
            url: 'https://dojo-files-dev.tensorplex.dev/demo/black_futuristic_flying_taxi_drone.5DFyGvRohJ94m6eiJMueNBDUJe5H2QM3jFxBvtaQs6grMCpQ.ply',
          },
        },
        {
          model: 'yourm/stable-diffusion-v0-2',
          completion: {
            url: 'https://dojo-files-dev.tensorplex.dev/demo/black_futuristic_flying_taxi_drone.5DWziseiAWej3yj2ZktR2vLDkvAq38fc32r4ADmMCeA54ZaG.ply',
          },
        },
        {
          model: 'dllm/sd-extra-0.3',
          completion: {
            url: 'https://dojo-files-dev.tensorplex.dev/demo/black_futuristic_flying_taxi_drone.5GYak58BXQJDEt3szXC3eKBV81kvhTqKXsTpVBCnbPRGPRGi.ply',
          },
        },
      ],
    },
    status: 'IN_PROGRESS',
    maxResults: 10,
    numResults: 7,
    numCriteria: 4,
    isCompletedByWorker: false,
  },
  {
    taskId: 'demo11-3d',
    title: 'LLM 3D Model Task (Demo)',
    body: 'Zebra with Stripes running through plains.',
    expireAt: '2099-12-03T15:04:00Z',
    type: '3D_MODEL',
    taskData: {
      task: '3D_MODEL',
      prompt: 'Zebra with Stripes running through plains.',
      criteria: [
        {
          max: 100,
          min: 1,
          type: 'multi-score',
          options: [
            'stabilityai/stable-diffusion-xl-base-1.0',
            'runwayml/stable-diffusion-v1-5',
            'yourm/stable-diffusion-v0-2',
            'dllm/sd-extra-0.3',
          ],
        },
      ],
      responses: [
        {
          model: 'stabilityai/stable-diffusion-xl-base-1.0',
          completion: {
            url: 'https://dojo-files-dev.tensorplex.dev/demo/zebra_with_stripes_running_through_plains.5DCbyAdY3wst6JHbJmpwNSegeKDpQrvciedLFcDap9ieRDav.ply',
          },
        },
        {
          model: 'runwayml/stable-diffusion-v1-5',
          completion: {
            url: 'https://dojo-files-dev.tensorplex.dev/demo/zebra_with_stripes_running_through_plains.5EkRJfcGTf8qXEspk1zFpcTfVZhA3E2W8Rc7MRbdE7WuBeKP.ply',
          },
        },
        {
          model: 'yourm/stable-diffusion-v0-2',
          completion: {
            url: 'https://dojo-files-dev.tensorplex.dev/demo/zebra_with_stripes_running_through_plains.5Et482RACNeu5NBhWxNkGiFX9ZbfFERcDGgq9ecSbs4dSN2W.ply',
          },
        },
        {
          model: 'dllm/sd-extra-0.3',
          completion: {
            url: 'https://dojo-files-dev.tensorplex.dev/demo/zebra_with_stripes_running_through_plains.5HNU3CX1UD4rM3nuxAHV76Sypdc5ggukWsKDbRZ1xdqLNGry.ply',
          },
        },
      ],
    },
    status: 'IN_PROGRESS',
    maxResults: 10,
    numResults: 1,
    numCriteria: 4,
    isCompletedByWorker: false,
  },
  {
    taskId: 'demo12-3d',
    title: 'LLM 3D Model Task (Demo)',
    body: 'Black and yellow gaming chair',
    expireAt: '2099-12-03T15:04:00Z',
    type: '3D_MODEL',
    taskData: {
      task: '3D_MODEL',
      prompt: 'Black and yellow gaming chair',
      criteria: [
        {
          max: 100,
          min: 1,
          type: 'multi-score',
          options: [
            'stabilityai/stable-diffusion-xl-base-1.0',
            'runwayml/stable-diffusion-v1-5',
            'yourm/stable-diffusion-v0-2',
            'dllm/sd-extra-0.3',
          ],
        },
      ],
      responses: [
        {
          model: 'stabilityai/stable-diffusion-xl-base-1.0',
          completion: {
            url: 'https://dojo-files-dev.tensorplex.dev/demo/black_and_yellow_curved_gaming_chair.5DAAKc3EMwY4axcUWiguzEVM3j459iV3Q2EdeFGKsotgNn8m.ply',
          },
        },
        {
          model: 'runwayml/stable-diffusion-v1-5',
          completion: {
            url: 'https://dojo-files-dev.tensorplex.dev/demo/black_and_yellow_curved_gaming_chair.5DoBghUER3kRpkVbSfRjCx4vUyhaiRMjC6dgnEAqf2eWtART.ply',
          },
        },
        {
          model: 'yourm/stable-diffusion-v0-2',
          completion: {
            url: 'https://dojo-files-dev.tensorplex.dev/demo/black_and_yellow_curved_gaming_chair.5E2DF4pFKhtfDHmDSG3mCA33PNMeBeNoExTLp4JLjPg4pz2M.ply',
          },
        },
        {
          model: 'dllm/sd-extra-0.3',
          completion: {
            url: 'https://dojo-files-dev.tensorplex.dev/demo/black_and_yellow_curved_gaming_chair.5EPFaPcqs78JoktAZ2R1MC7GAKMhzXiS8ZyBQr3EKANfpfWU.ply',
          },
        },
      ],
    },
    status: 'IN_PROGRESS',
    maxResults: 10,
    numResults: 1,
    numCriteria: 4,
    isCompletedByWorker: false,
  },
];

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
          model: 'anthropic/claude-3.5-sonnet',
          completion: {
            files: {
              'index.js': {
                content:
                  "document.addEventListener('DOMContentLoaded', () =\u003e {\n    const guitar = document.querySelector('.guitar');\n    const strings = document.querySelectorAll('.string');\n    const tuningSlider = document.getElementById('tuning-slider');\n    const tuningValue = document.getElementById('tuning-value');\n\n    const baseFrequencies = {\n        'E': 82.41,\n        'A': 110.00,\n        'D': 146.83,\n        'G': 196.00,\n        'B': 246.94,\n        'E': 329.63\n    };\n\n    let tuning = 0;\n\n    function setupStrings() {\n        strings.forEach((string, index) =\u003e {\n            string.style.top = `${10 + (index * 13)}%`;\n            string.addEventListener('click', () =\u003e pluckString(string));\n        });\n    }\n\n    function pluckString(string) {\n        string.classList.add('pluck');\n        playNote(string.dataset.note);\n        setTimeout(() =\u003e string.classList.remove('pluck'), 500);\n    }\n\n    function playNote(note) {\n        const audioContext = new (window.AudioContext || window.webkitAudioContext)();\n        const oscillator = audioContext.createOscillator();\n        const gainNode = audioContext.createGain();\n\n        oscillator.connect(gainNode);\n        gainNode.connect(audioContext.destination);\n\n        const frequency = baseFrequencies[note] * Math.pow(2, tuning / 12);\n        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);\n\n        gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);\n        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 1);\n\n        oscillator.start();\n        oscillator.stop(audioContext.currentTime + 1);\n    }\n\n    function updateTuning() {\n        tuning = parseInt(tuningSlider.value);\n        let tuningText;\n        switch (tuning) {\n            case -2: tuningText = 'Very Low'; break;\n            case -1: tuningText = 'Low'; break;\n            case 0: tuningText = 'Standard'; break;\n            case 1: tuningText = 'High'; break;\n            case 2: tuningText = 'Very High'; break;\n        }\n        tuningValue.textContent = tuningText;\n    }\n\n    setupStrings();\n    tuningSlider.addEventListener('input', updateTuning);\n    updateTuning();\n});\n",
              },
              'index.html': {
                content:
                  '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003eInteractive Guitar Visualization\u003c/title\u003e\n    \u003cstyle\u003e\n        body {\n            margin: 0;\n            padding: 0;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            min-height: 100vh;\n            background: linear-gradient(to bottom, #8B4513, #D2691E);\n            font-family: Arial, sans-serif;\n        }\n        .guitar-container {\n            position: relative;\n            width: 80vw;\n            max-width: 800px;\n        }\n        .guitar {\n            width: 100%;\n            height: 300px;\n            background-color: #DEB887;\n            border-radius: 10px;\n            position: relative;\n            overflow: hidden;\n        }\n        .fretboard {\n            width: 100%;\n            height: 80%;\n            background-color: #8B4513;\n            position: absolute;\n            top: 10%;\n        }\n        .string {\n            width: 100%;\n            height: 2px;\n            background-color: #C0C0C0;\n            position: absolute;\n            cursor: pointer;\n            transition: all 0.3s ease;\n        }\n        .string:hover {\n            height: 4px;\n            background-color: #FFFFFF;\n            box-shadow: 0 0 10px #FFFFFF;\n        }\n        .string.pluck {\n            animation: pluck 0.5s ease;\n        }\n        @keyframes pluck {\n            0% { transform: translateY(0); }\n            50% { transform: translateY(10px); }\n            100% { transform: translateY(0); }\n        }\n        .tuning-control {\n            margin-top: 20px;\n            text-align: center;\n            color: #FFFFFF;\n        }\n        #tuning-slider {\n            width: 80%;\n            margin-top: 10px;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv class="guitar-container"\u003e\n        \u003cdiv class="guitar"\u003e\n            \u003cdiv class="fretboard"\u003e\u003c/div\u003e\n            \u003cdiv class="string" data-note="E"\u003e\u003c/div\u003e\n            \u003cdiv class="string" data-note="A"\u003e\u003c/div\u003e\n            \u003cdiv class="string" data-note="D"\u003e\u003c/div\u003e\n            \u003cdiv class="string" data-note="G"\u003e\u003c/div\u003e\n            \u003cdiv class="string" data-note="B"\u003e\u003c/div\u003e\n            \u003cdiv class="string" data-note="E"\u003e\u003c/div\u003e\n        \u003c/div\u003e\n        \u003cdiv class="tuning-control"\u003e\n            \u003clabel for="tuning-slider"\u003eTuning: \u003cspan id="tuning-value"\u003eStandard\u003c/span\u003e\u003c/label\u003e\n            \u003cinput type="range" id="tuning-slider" min="-2" max="2" step="1" value="0"\u003e\n        \u003c/div\u003e\n    \u003c/div\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
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
            sandbox_url: 'https://dlj7rc.csb.app/',
            combined_html:
              '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003eInteractive Guitar Visualization\u003c/title\u003e\n    \u003cstyle\u003e\n        body {\n            margin: 0;\n            padding: 0;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            min-height: 100vh;\n            background: linear-gradient(to bottom, #8B4513, #D2691E);\n            font-family: Arial, sans-serif;\n        }\n        .guitar-container {\n            position: relative;\n            width: 80vw;\n            max-width: 800px;\n        }\n        .guitar {\n            width: 100%;\n            height: 300px;\n            background-color: #DEB887;\n            border-radius: 10px;\n            position: relative;\n            overflow: hidden;\n        }\n        .fretboard {\n            width: 100%;\n            height: 80%;\n            background-color: #8B4513;\n            position: absolute;\n            top: 10%;\n        }\n        .string {\n            width: 100%;\n            height: 2px;\n            background-color: #C0C0C0;\n            position: absolute;\n            cursor: pointer;\n            transition: all 0.3s ease;\n        }\n        .string:hover {\n            height: 4px;\n            background-color: #FFFFFF;\n            box-shadow: 0 0 10px #FFFFFF;\n        }\n        .string.pluck {\n            animation: pluck 0.5s ease;\n        }\n        @keyframes pluck {\n            0% { transform: translateY(0); }\n            50% { transform: translateY(10px); }\n            100% { transform: translateY(0); }\n        }\n        .tuning-control {\n            margin-top: 20px;\n            text-align: center;\n            color: #FFFFFF;\n        }\n        #tuning-slider {\n            width: 80%;\n            margin-top: 10px;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv class="guitar-container"\u003e\n        \u003cdiv class="guitar"\u003e\n            \u003cdiv class="fretboard"\u003e\u003c/div\u003e\n            \u003cdiv class="string" data-note="E"\u003e\u003c/div\u003e\n            \u003cdiv class="string" data-note="A"\u003e\u003c/div\u003e\n            \u003cdiv class="string" data-note="D"\u003e\u003c/div\u003e\n            \u003cdiv class="string" data-note="G"\u003e\u003c/div\u003e\n            \u003cdiv class="string" data-note="B"\u003e\u003c/div\u003e\n            \u003cdiv class="string" data-note="E"\u003e\u003c/div\u003e\n        \u003c/div\u003e\n        \u003cdiv class="tuning-control"\u003e\n            \u003clabel for="tuning-slider"\u003eTuning: \u003cspan id="tuning-value"\u003eStandard\u003c/span\u003e\u003c/label\u003e\n            \u003cinput type="range" id="tuning-slider" min="-2" max="2" step="1" value="0"\u003e\n        \u003c/div\u003e\n    \u003c/div\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003cscript\u003edocument.addEventListener(\'DOMContentLoaded\', () =\u003e {\n    const guitar = document.querySelector(\'.guitar\');\n    const strings = document.querySelectorAll(\'.string\');\n    const tuningSlider = document.getElementById(\'tuning-slider\');\n    const tuningValue = document.getElementById(\'tuning-value\');\n\n    const baseFrequencies = {\n        \'E\': 82.41,\n        \'A\': 110.00,\n        \'D\': 146.83,\n        \'G\': 196.00,\n        \'B\': 246.94,\n        \'E\': 329.63\n    };\n\n    let tuning = 0;\n\n    function setupStrings() {\n        strings.forEach((string, index) =\u003e {\n            string.style.top = `${10 + (index * 13)}%`;\n            string.addEventListener(\'click\', () =\u003e pluckString(string));\n        });\n    }\n\n    function pluckString(string) {\n        string.classList.add(\'pluck\');\n        playNote(string.dataset.note);\n        setTimeout(() =\u003e string.classList.remove(\'pluck\'), 500);\n    }\n\n    function playNote(note) {\n        const audioContext = new (window.AudioContext || window.webkitAudioContext)();\n        const oscillator = audioContext.createOscillator();\n        const gainNode = audioContext.createGain();\n\n        oscillator.connect(gainNode);\n        gainNode.connect(audioContext.destination);\n\n        const frequency = baseFrequencies[note] * Math.pow(2, tuning / 12);\n        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);\n\n        gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);\n        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 1);\n\n        oscillator.start();\n        oscillator.stop(audioContext.currentTime + 1);\n    }\n\n    function updateTuning() {\n        tuning = parseInt(tuningSlider.value);\n        let tuningText;\n        switch (tuning) {\n            case -2: tuningText = \'Very Low\'; break;\n            case -1: tuningText = \'Low\'; break;\n            case 0: tuningText = \'Standard\'; break;\n            case 1: tuningText = \'High\'; break;\n            case 2: tuningText = \'Very High\'; break;\n        }\n        tuningValue.textContent = tuningText;\n    }\n\n    setupStrings();\n    tuningSlider.addEventListener(\'input\', updateTuning);\n    updateTuning();\n});\n\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e',
            additional_notes:
              'This solution creates an interactive guitar visualization using HTML, CSS, and JavaScript. It includes a responsive design, string highlighting on hover, plucking animation with sound on click, and a tuning slider to adjust the pitch of the notes. No additional installation commands are required as it uses only built-in JavaScript features.',
            installation_commands: '',
          },
        },
        {
          model: 'anthropic/claude-3.5-sonnet',
          completion: {
            files: {
              'index.js': {
                content:
                  "document.addEventListener('DOMContentLoaded', () =\u003e {\n    const guitar = document.getElementById('guitar');\n    const stringCount = 6;\n    const fretCount = 12;\n\n    // Create strings\n    for (let i = 0; i \u003c stringCount; i++) {\n        const string = document.createElement('div');\n        string.className = 'string';\n        string.style.top = `${(i + 1) * (100 / (stringCount + 1))}%`;\n        string.addEventListener('click', () =\u003e pluckString(i));\n        guitar.appendChild(string);\n    }\n\n    // Create frets\n    for (let i = 1; i \u003c= fretCount; i++) {\n        const fret = document.createElement('div');\n        fret.className = 'fret';\n        fret.style.left = `${(i / (fretCount + 1)) * 100}%`;\n        guitar.appendChild(fret);\n    }\n\n    // Audio context and sounds\n    const audioContext = new (window.AudioContext || window.webkitAudioContext)();\n    const notes = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'];\n    const audioBuffers = {};\n\n    // Load audio files\n    notes.forEach(note =\u003e {\n        fetch(`https://raw.githubusercontent.com/nbrosowsky/tonejs-instruments/master/samples/guitar-acoustic/${note}.mp3`)\n            .then(response =\u003e response.arrayBuffer())\n            .then(arrayBuffer =\u003e audioContext.decodeAudioData(arrayBuffer))\n            .then(audioBuffer =\u003e {\n                audioBuffers[note] = audioBuffer;\n            });\n    });\n\n    function pluckString(stringIndex) {\n        const string = guitar.getElementsByClassName('string')[stringIndex];\n        string.style.animation = 'none';\n        string.offsetHeight; // Trigger reflow\n        string.style.animation = 'pluck 0.5s ease';\n\n        // Play sound\n        const source = audioContext.createBufferSource();\n        source.buffer = audioBuffers[notes[stringIndex]];\n        source.connect(audioContext.destination);\n        source.start();\n    }\n\n    // Add pluck animation\n    const style = document.createElement('style');\n    style.textContent = `\n        @keyframes pluck {\n            0%, 100% { transform: translateY(0); }\n            50% { transform: translateY(5px); }\n        }\n    `;\n    document.head.appendChild(style);\n});\n",
              },
              'index.html': {
                content:
                  '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003eInteractive Guitar Visualization\u003c/title\u003e\n    \u003cstyle\u003e\n        body {\n            margin: 0;\n            padding: 0;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            min-height: 100vh;\n            background: linear-gradient(to bottom, #8B4513, #D2691E);\n            font-family: Arial, sans-serif;\n        }\n        #guitar {\n            position: relative;\n            width: 80vw;\n            max-width: 800px;\n            height: 60vh;\n            background-color: #DEB887;\n            border-radius: 10px;\n            box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);\n        }\n        .string {\n            position: absolute;\n            width: 100%;\n            height: 2px;\n            background-color: #C0C0C0;\n            cursor: pointer;\n            transition: all 0.3s ease;\n        }\n        .string:hover {\n            height: 4px;\n            background-color: #FFD700;\n            box-shadow: 0 0 10px #FFD700;\n        }\n        .fret {\n            position: absolute;\n            width: 2px;\n            height: 100%;\n            background-color: #8B4513;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv id="guitar"\u003e\n        \u003c!-- Strings and frets will be added dynamically via JavaScript --\u003e\n    \u003c/div\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
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
            sandbox_url: 'https://z8tl6w.csb.app/',
            combined_html:
              "\u003c!DOCTYPE html\u003e\n\u003chtml lang=\"en\"\u003e\n\u003chead\u003e\n    \u003cmeta charset=\"UTF-8\"\u003e\n    \u003cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003e\n    \u003ctitle\u003eInteractive Guitar Visualization\u003c/title\u003e\n    \u003cstyle\u003e\n        body {\n            margin: 0;\n            padding: 0;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            min-height: 100vh;\n            background: linear-gradient(to bottom, #8B4513, #D2691E);\n            font-family: Arial, sans-serif;\n        }\n        #guitar {\n            position: relative;\n            width: 80vw;\n            max-width: 800px;\n            height: 60vh;\n            background-color: #DEB887;\n            border-radius: 10px;\n            box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);\n        }\n        .string {\n            position: absolute;\n            width: 100%;\n            height: 2px;\n            background-color: #C0C0C0;\n            cursor: pointer;\n            transition: all 0.3s ease;\n        }\n        .string:hover {\n            height: 4px;\n            background-color: #FFD700;\n            box-shadow: 0 0 10px #FFD700;\n        }\n        .fret {\n            position: absolute;\n            width: 2px;\n            height: 100%;\n            background-color: #8B4513;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv id=\"guitar\"\u003e\n        \u003c!-- Strings and frets will be added dynamically via JavaScript --\u003e\n    \u003c/div\u003e\n    \u003cscript src=\"index.js\"\u003e\u003c/script\u003e\n\u003cscript\u003edocument.addEventListener('DOMContentLoaded', () =\u003e {\n    const guitar = document.getElementById('guitar');\n    const stringCount = 6;\n    const fretCount = 12;\n\n    // Create strings\n    for (let i = 0; i \u003c stringCount; i++) {\n        const string = document.createElement('div');\n        string.className = 'string';\n        string.style.top = `${(i + 1) * (100 / (stringCount + 1))}%`;\n        string.addEventListener('click', () =\u003e pluckString(i));\n        guitar.appendChild(string);\n    }\n\n    // Create frets\n    for (let i = 1; i \u003c= fretCount; i++) {\n        const fret = document.createElement('div');\n        fret.className = 'fret';\n        fret.style.left = `${(i / (fretCount + 1)) * 100}%`;\n        guitar.appendChild(fret);\n    }\n\n    // Audio context and sounds\n    const audioContext = new (window.AudioContext || window.webkitAudioContext)();\n    const notes = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'];\n    const audioBuffers = {};\n\n    // Load audio files\n    notes.forEach(note =\u003e {\n        fetch(`https://raw.githubusercontent.com/nbrosowsky/tonejs-instruments/master/samples/guitar-acoustic/${note}.mp3`)\n            .then(response =\u003e response.arrayBuffer())\n            .then(arrayBuffer =\u003e audioContext.decodeAudioData(arrayBuffer))\n            .then(audioBuffer =\u003e {\n                audioBuffers[note] = audioBuffer;\n            });\n    });\n\n    function pluckString(stringIndex) {\n        const string = guitar.getElementsByClassName('string')[stringIndex];\n        string.style.animation = 'none';\n        string.offsetHeight; // Trigger reflow\n        string.style.animation = 'pluck 0.5s ease';\n\n        // Play sound\n        const source = audioContext.createBufferSource();\n        source.buffer = audioBuffers[notes[stringIndex]];\n        source.connect(audioContext.destination);\n        source.start();\n    }\n\n    // Add pluck animation\n    const style = document.createElement('style');\n    style.textContent = `\n        @keyframes pluck {\n            0%, 100% { transform: translateY(0); }\n            50% { transform: translateY(5px); }\n        }\n    `;\n    document.head.appendChild(style);\n});\n\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e",
            additional_notes:
              'This solution creates an interactive guitar visualization using HTML, CSS, and JavaScript. It includes 6 strings and 12 frets. The strings highlight on hover and produce a plucking animation and sound when clicked. The visualization is responsive and works on different screen sizes. No additional installation is required as it uses only built-in JavaScript features.',
            installation_commands: '',
          },
        },
        {
          model: 'anthropic/claude-3.5-sonnet',
          completion: {
            files: {
              'index.js': {
                content:
                  "const guitar = document.getElementById('guitar');\nconst strings = document.querySelectorAll('.string');\nconst tuningButtons = document.querySelectorAll('#controls button');\nconst recordButton = document.getElementById('record');\nconst playButton = document.getElementById('play');\nconst clearButton = document.getElementById('clear');\n\nconst audioContext = new (window.AudioContext || window.webkitAudioContext)();\n\nconst tunings = {\n    standard: [329.63, 246.94, 196.00, 146.83, 110.00, 82.41],\n    dropD: [329.63, 246.94, 196.00, 146.83, 110.00, 73.42],\n    openG: [392.00, 246.94, 196.00, 146.83, 98.00, 73.42]\n};\n\nlet currentTuning = 'standard';\nlet isRecording = false;\nlet recordedNotes = [];\n\nfunction playNote(frequency) {\n    const oscillator = audioContext.createOscillator();\n    const gainNode = audioContext.createGain();\n\n    oscillator.type = 'triangle';\n    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);\n\n    gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);\n    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 1);\n\n    oscillator.connect(gainNode);\n    gainNode.connect(audioContext.destination);\n\n    oscillator.start();\n    oscillator.stop(audioContext.currentTime + 1);\n}\n\nstrings.forEach((string, index) =\u003e {\n    string.addEventListener('click', () =\u003e {\n        const frequency = tunings[currentTuning][index];\n        playNote(frequency);\n        string.classList.add('plucked');\n        setTimeout(() =\u003e string.classList.remove('plucked'), 500);\n\n        if (isRecording) {\n            recordedNotes.push({ frequency, time: Date.now() });\n        }\n    });\n});\n\ntuningButtons.forEach(button =\u003e {\n    button.addEventListener('click', () =\u003e {\n        currentTuning = button.id;\n    });\n});\n\nrecordButton.addEventListener('click', () =\u003e {\n    isRecording = !isRecording;\n    recordButton.textContent = isRecording ? 'Stop Recording' : 'Record';\n    if (isRecording) {\n        recordedNotes = [];\n    }\n});\n\nplayButton.addEventListener('click', () =\u003e {\n    if (recordedNotes.length === 0) return;\n\n    const startTime = recordedNotes[0].time;\n    recordedNotes.forEach(note =\u003e {\n        setTimeout(() =\u003e {\n            playNote(note.frequency);\n        }, note.time - startTime);\n    });\n});\n\nclearButton.addEventListener('click', () =\u003e {\n    recordedNotes = [];\n});\n\n// Responsive design\nfunction resizeGuitar() {\n    const containerWidth = guitar.offsetWidth;\n    const containerHeight = guitar.offsetHeight;\n    const stringHeight = containerHeight * 0.8 / 6;\n\n    strings.forEach((string, index) =\u003e {\n        string.style.height = `${stringHeight}px`;\n        string.style.top = `${(index * stringHeight) + (containerHeight * 0.1)}px`;\n    });\n}\n\nwindow.addEventListener('resize', resizeGuitar);\nresizeGuitar();",
              },
              'index.html': {
                content:
                  '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003eInteractive Guitar Visualization\u003c/title\u003e\n    \u003clink rel="stylesheet" href="styles.css"\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv class="container"\u003e\n        \u003cdiv id="guitar"\u003e\n            \u003cdiv id="fretboard"\u003e\u003c/div\u003e\n            \u003cdiv id="strings"\u003e\n                \u003cdiv class="string" data-string="1"\u003e\u003c/div\u003e\n                \u003cdiv class="string" data-string="2"\u003e\u003c/div\u003e\n                \u003cdiv class="string" data-string="3"\u003e\u003c/div\u003e\n                \u003cdiv class="string" data-string="4"\u003e\u003c/div\u003e\n                \u003cdiv class="string" data-string="5"\u003e\u003c/div\u003e\n                \u003cdiv class="string" data-string="6"\u003e\u003c/div\u003e\n            \u003c/div\u003e\n        \u003c/div\u003e\n        \u003cdiv id="controls"\u003e\n            \u003ch3\u003eTuning:\u003c/h3\u003e\n            \u003cbutton id="standard"\u003eStandard\u003c/button\u003e\n            \u003cbutton id="dropD"\u003eDrop D\u003c/button\u003e\n            \u003cbutton id="openG"\u003eOpen G\u003c/button\u003e\n            \u003ch3\u003eRecording:\u003c/h3\u003e\n            \u003cbutton id="record"\u003eRecord\u003c/button\u003e\n            \u003cbutton id="play"\u003ePlay\u003c/button\u003e\n            \u003cbutton id="clear"\u003eClear\u003c/button\u003e\n        \u003c/div\u003e\n    \u003c/div\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
              },
              'styles.css': {
                content:
                  "body {\n    font-family: Arial, sans-serif;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    margin: 0;\n    background-color: #f0e6d2;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#guitar {\n    width: 300px;\n    height: 600px;\n    background-color: #8b4513;\n    border-radius: 150px 150px 0 0;\n    position: relative;\n    overflow: hidden;\n}\n\n#fretboard {\n    width: 100%;\n    height: 100%;\n    background-color: #d2b48c;\n    position: absolute;\n    top: 50px;\n    left: 0;\n}\n\n#strings {\n    width: 100%;\n    height: calc(100% - 100px);\n    position: absolute;\n    top: 50px;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n\n.string {\n    width: 100%;\n    height: 2px;\n    background-color: #c0c0c0;\n    position: relative;\n}\n\n.string::before {\n    content: '';\n    position: absolute;\n    top: -1px;\n    left: 0;\n    width: 100%;\n    height: 4px;\n    background-color: rgba(255, 255, 255, 0.5);\n    transform: scaleY(0);\n    transition: transform 0.1s;\n}\n\n.string.plucked::before {\n    transform: scaleY(1);\n    animation: vibrate 0.5s ease-out;\n}\n\n@keyframes vibrate {\n    0% { transform: scaleY(1) translateY(0); }\n    25% { transform: scaleY(1) translateY(2px); }\n    50% { transform: scaleY(1) translateY(-2px); }\n    75% { transform: scaleY(1) translateY(1px); }\n    100% { transform: scaleY(1) translateY(0); }\n}\n\n#controls {\n    margin-top: 20px;\n    text-align: center;\n}\n\nbutton {\n    margin: 5px;\n    padding: 5px 10px;\n    font-size: 14px;\n    cursor: pointer;\n}\n\n@media (max-width: 600px) {\n    #guitar {\n        width: 200px;\n        height: 400px;\n    }\n}",
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
            sandbox_url: 'https://6456z8.csb.app/',
            combined_html:
              '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003eInteractive Guitar Visualization\u003c/title\u003e\n    \u003clink rel="stylesheet" href="styles.css"\u003e\n\u003cstyle\u003ebody {\n    font-family: Arial, sans-serif;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    margin: 0;\n    background-color: #f0e6d2;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#guitar {\n    width: 300px;\n    height: 600px;\n    background-color: #8b4513;\n    border-radius: 150px 150px 0 0;\n    position: relative;\n    overflow: hidden;\n}\n\n#fretboard {\n    width: 100%;\n    height: 100%;\n    background-color: #d2b48c;\n    position: absolute;\n    top: 50px;\n    left: 0;\n}\n\n#strings {\n    width: 100%;\n    height: calc(100% - 100px);\n    position: absolute;\n    top: 50px;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n\n.string {\n    width: 100%;\n    height: 2px;\n    background-color: #c0c0c0;\n    position: relative;\n}\n\n.string::before {\n    content: \'\';\n    position: absolute;\n    top: -1px;\n    left: 0;\n    width: 100%;\n    height: 4px;\n    background-color: rgba(255, 255, 255, 0.5);\n    transform: scaleY(0);\n    transition: transform 0.1s;\n}\n\n.string.plucked::before {\n    transform: scaleY(1);\n    animation: vibrate 0.5s ease-out;\n}\n\n@keyframes vibrate {\n    0% { transform: scaleY(1) translateY(0); }\n    25% { transform: scaleY(1) translateY(2px); }\n    50% { transform: scaleY(1) translateY(-2px); }\n    75% { transform: scaleY(1) translateY(1px); }\n    100% { transform: scaleY(1) translateY(0); }\n}\n\n#controls {\n    margin-top: 20px;\n    text-align: center;\n}\n\nbutton {\n    margin: 5px;\n    padding: 5px 10px;\n    font-size: 14px;\n    cursor: pointer;\n}\n\n@media (max-width: 600px) {\n    #guitar {\n        width: 200px;\n        height: 400px;\n    }\n}\u003c/style\u003e\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv class="container"\u003e\n        \u003cdiv id="guitar"\u003e\n            \u003cdiv id="fretboard"\u003e\u003c/div\u003e\n            \u003cdiv id="strings"\u003e\n                \u003cdiv class="string" data-string="1"\u003e\u003c/div\u003e\n                \u003cdiv class="string" data-string="2"\u003e\u003c/div\u003e\n                \u003cdiv class="string" data-string="3"\u003e\u003c/div\u003e\n                \u003cdiv class="string" data-string="4"\u003e\u003c/div\u003e\n                \u003cdiv class="string" data-string="5"\u003e\u003c/div\u003e\n                \u003cdiv class="string" data-string="6"\u003e\u003c/div\u003e\n            \u003c/div\u003e\n        \u003c/div\u003e\n        \u003cdiv id="controls"\u003e\n            \u003ch3\u003eTuning:\u003c/h3\u003e\n            \u003cbutton id="standard"\u003eStandard\u003c/button\u003e\n            \u003cbutton id="dropD"\u003eDrop D\u003c/button\u003e\n            \u003cbutton id="openG"\u003eOpen G\u003c/button\u003e\n            \u003ch3\u003eRecording:\u003c/h3\u003e\n            \u003cbutton id="record"\u003eRecord\u003c/button\u003e\n            \u003cbutton id="play"\u003ePlay\u003c/button\u003e\n            \u003cbutton id="clear"\u003eClear\u003c/button\u003e\n        \u003c/div\u003e\n    \u003c/div\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003cscript\u003econst guitar = document.getElementById(\'guitar\');\nconst strings = document.querySelectorAll(\'.string\');\nconst tuningButtons = document.querySelectorAll(\'#controls button\');\nconst recordButton = document.getElementById(\'record\');\nconst playButton = document.getElementById(\'play\');\nconst clearButton = document.getElementById(\'clear\');\n\nconst audioContext = new (window.AudioContext || window.webkitAudioContext)();\n\nconst tunings = {\n    standard: [329.63, 246.94, 196.00, 146.83, 110.00, 82.41],\n    dropD: [329.63, 246.94, 196.00, 146.83, 110.00, 73.42],\n    openG: [392.00, 246.94, 196.00, 146.83, 98.00, 73.42]\n};\n\nlet currentTuning = \'standard\';\nlet isRecording = false;\nlet recordedNotes = [];\n\nfunction playNote(frequency) {\n    const oscillator = audioContext.createOscillator();\n    const gainNode = audioContext.createGain();\n\n    oscillator.type = \'triangle\';\n    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);\n\n    gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);\n    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 1);\n\n    oscillator.connect(gainNode);\n    gainNode.connect(audioContext.destination);\n\n    oscillator.start();\n    oscillator.stop(audioContext.currentTime + 1);\n}\n\nstrings.forEach((string, index) =\u003e {\n    string.addEventListener(\'click\', () =\u003e {\n        const frequency = tunings[currentTuning][index];\n        playNote(frequency);\n        string.classList.add(\'plucked\');\n        setTimeout(() =\u003e string.classList.remove(\'plucked\'), 500);\n\n        if (isRecording) {\n            recordedNotes.push({ frequency, time: Date.now() });\n        }\n    });\n});\n\ntuningButtons.forEach(button =\u003e {\n    button.addEventListener(\'click\', () =\u003e {\n        currentTuning = button.id;\n    });\n});\n\nrecordButton.addEventListener(\'click\', () =\u003e {\n    isRecording = !isRecording;\n    recordButton.textContent = isRecording ? \'Stop Recording\' : \'Record\';\n    if (isRecording) {\n        recordedNotes = [];\n    }\n});\n\nplayButton.addEventListener(\'click\', () =\u003e {\n    if (recordedNotes.length === 0) return;\n\n    const startTime = recordedNotes[0].time;\n    recordedNotes.forEach(note =\u003e {\n        setTimeout(() =\u003e {\n            playNote(note.frequency);\n        }, note.time - startTime);\n    });\n});\n\nclearButton.addEventListener(\'click\', () =\u003e {\n    recordedNotes = [];\n});\n\n// Responsive design\nfunction resizeGuitar() {\n    const containerWidth = guitar.offsetWidth;\n    const containerHeight = guitar.offsetHeight;\n    const stringHeight = containerHeight * 0.8 / 6;\n\n    strings.forEach((string, index) =\u003e {\n        string.style.height = `${stringHeight}px`;\n        string.style.top = `${(index * stringHeight) + (containerHeight * 0.1)}px`;\n    });\n}\n\nwindow.addEventListener(\'resize\', resizeGuitar);\nresizeGuitar();\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e',
            additional_notes:
              'This implementation creates an interactive guitar visualization with 6 strings and a fretboard. Users can click on strings to play notes, switch between different tunings, and record/playback simple melodies. The design is responsive and works on different screen sizes. No additional installation is required as it uses only built-in JavaScript features.',
            installation_commands: '',
          },
        },
        {
          model: 'anthropic/claude-3.5-sonnet',
          completion: {
            files: {
              'index.js': {
                content:
                  "const pianoKeys = [\n    { note: 'A0', type: 'white' }, { note: 'A#0', type: 'black' }, { note: 'B0', type: 'white' },\n    { note: 'C1', type: 'white' }, { note: 'C#1', type: 'black' }, { note: 'D1', type: 'white' },\n    { note: 'D#1', type: 'black' }, { note: 'E1', type: 'white' }, { note: 'F1', type: 'white' },\n    { note: 'F#1', type: 'black' }, { note: 'G1', type: 'white' }, { note: 'G#1', type: 'black' },\n    { note: 'A1', type: 'white' }, { note: 'A#1', type: 'black' }, { note: 'B1', type: 'white' },\n    { note: 'C2', type: 'white' }, { note: 'C#2', type: 'black' }, { note: 'D2', type: 'white' },\n    { note: 'D#2', type: 'black' }, { note: 'E2', type: 'white' }, { note: 'F2', type: 'white' },\n    { note: 'F#2', type: 'black' }, { note: 'G2', type: 'white' }, { note: 'G#2', type: 'black' },\n    { note: 'A2', type: 'white' }, { note: 'A#2', type: 'black' }, { note: 'B2', type: 'white' },\n    { note: 'C3', type: 'white' }, { note: 'C#3', type: 'black' }, { note: 'D3', type: 'white' },\n    { note: 'D#3', type: 'black' }, { note: 'E3', type: 'white' }, { note: 'F3', type: 'white' },\n    { note: 'F#3', type: 'black' }, { note: 'G3', type: 'white' }, { note: 'G#3', type: 'black' },\n    { note: 'A3', type: 'white' }, { note: 'A#3', type: 'black' }, { note: 'B3', type: 'white' },\n    { note: 'C4', type: 'white' }, { note: 'C#4', type: 'black' }, { note: 'D4', type: 'white' },\n    { note: 'D#4', type: 'black' }, { note: 'E4', type: 'white' }, { note: 'F4', type: 'white' },\n    { note: 'F#4', type: 'black' }, { note: 'G4', type: 'white' }, { note: 'G#4', type: 'black' },\n    { note: 'A4', type: 'white' }, { note: 'A#4', type: 'black' }, { note: 'B4', type: 'white' },\n    { note: 'C5', type: 'white' }, { note: 'C#5', type: 'black' }, { note: 'D5', type: 'white' },\n    { note: 'D#5', type: 'black' }, { note: 'E5', type: 'white' }, { note: 'F5', type: 'white' },\n    { note: 'F#5', type: 'black' }, { note: 'G5', type: 'white' }, { note: 'G#5', type: 'black' },\n    { note: 'A5', type: 'white' }, { note: 'A#5', type: 'black' }, { note: 'B5', type: 'white' },\n    { note: 'C6', type: 'white' }, { note: 'C#6', type: 'black' }, { note: 'D6', type: 'white' },\n    { note: 'D#6', type: 'black' }, { note: 'E6', type: 'white' }, { note: 'F6', type: 'white' },\n    { note: 'F#6', type: 'black' }, { note: 'G6', type: 'white' }, { note: 'G#6', type: 'black' },\n    { note: 'A6', type: 'white' }, { note: 'A#6', type: 'black' }, { note: 'B6', type: 'white' },\n    { note: 'C7', type: 'white' }, { note: 'C#7', type: 'black' }, { note: 'D7', type: 'white' },\n    { note: 'D#7', type: 'black' }, { note: 'E7', type: 'white' }, { note: 'F7', type: 'white' },\n    { note: 'F#7', type: 'black' }, { note: 'G7', type: 'white' }, { note: 'G#7', type: 'black' },\n    { note: 'A7', type: 'white' }, { note: 'A#7', type: 'black' }, { note: 'B7', type: 'white' },\n    { note: 'C8', type: 'white' }\n];\n\nconst piano = document.getElementById('piano');\nconst volumeSlider = document.getElementById('volumeSlider');\nlet audioContext;\n\nfunction createKey(note, type) {\n    const key = document.createElement('div');\n    key.className = `key ${type}-key`;\n    key.dataset.note = note;\n    key.addEventListener('mousedown', playNote);\n    key.addEventListener('mouseup', stopNote);\n    key.addEventListener('mouseleave', stopNote);\n    return key;\n}\n\nfunction initializePiano() {\n    pianoKeys.forEach(key =\u003e {\n        piano.appendChild(createKey(key.note, key.type));\n    });\n}\n\nfunction playNote(event) {\n    if (!audioContext) {\n        audioContext = new (window.AudioContext || window.webkitAudioContext)();\n    }\n\n    const note = event.target.dataset.note;\n    const frequency = getFrequency(note);\n\n    const oscillator = audioContext.createOscillator();\n    const gainNode = audioContext.createGain();\n\n    oscillator.type = 'sine';\n    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);\n\n    gainNode.gain.setValueAtTime(parseFloat(volumeSlider.value), audioContext.currentTime);\n    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 1);\n\n    oscillator.connect(gainNode);\n    gainNode.connect(audioContext.destination);\n\n    oscillator.start();\n    oscillator.stop(audioContext.currentTime + 1);\n\n    event.target.classList.add('active');\n}\n\nfunction stopNote(event) {\n    event.target.classList.remove('active');\n}\n\nfunction getFrequency(note) {\n    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];\n    const octave = parseInt(note.slice(-1));\n    const semitone = notes.indexOf(note.slice(0, -1));\n    return 440 * Math.pow(2, (octave - 4) + (semitone - 9) / 12);\n}\n\ninitializePiano();\n",
              },
              'index.html': {
                content:
                  '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003eInteractive Piano Visualization\u003c/title\u003e\n    \u003cstyle\u003e\n        body {\n            margin: 0;\n            padding: 0;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            min-height: 100vh;\n            background: linear-gradient(to bottom, #1a2a6c, #b21f1f, #fdbb2d);\n            font-family: Arial, sans-serif;\n        }\n        .piano-container {\n            background-color: #222;\n            border-radius: 10px;\n            padding: 20px;\n            box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);\n        }\n        .piano {\n            display: flex;\n            position: relative;\n        }\n        .key {\n            position: relative;\n            cursor: pointer;\n            transition: all 0.1s;\n        }\n        .white-key {\n            width: 40px;\n            height: 200px;\n            background: linear-gradient(to bottom, #f0f0f0, #fff);\n            border: 1px solid #ccc;\n            border-radius: 0 0 5px 5px;\n            z-index: 1;\n        }\n        .black-key {\n            width: 25px;\n            height: 120px;\n            background: linear-gradient(to bottom, #333, #000);\n            margin-left: -12.5px;\n            margin-right: -12.5px;\n            z-index: 2;\n            border-radius: 0 0 3px 3px;\n        }\n        .white-key:hover {\n            background: linear-gradient(to bottom, #e0e0e0, #f5f5f5);\n        }\n        .black-key:hover {\n            background: linear-gradient(to bottom, #444, #222);\n        }\n        .white-key:active, .white-key.active {\n            background: linear-gradient(to bottom, #d0d0d0, #e5e5e5);\n            transform: translateY(2px);\n        }\n        .black-key:active, .black-key.active {\n            background: linear-gradient(to bottom, #555, #333);\n            transform: translateY(2px);\n        }\n        .volume-control {\n            margin-top: 20px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            color: #fff;\n        }\n        .volume-slider {\n            width: 200px;\n            margin: 0 10px;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv class="piano-container"\u003e\n        \u003cdiv class="piano" id="piano"\u003e\u003c/div\u003e\n        \u003cdiv class="volume-control"\u003e\n            \u003cspan\u003eVolume:\u003c/span\u003e\n            \u003cinput type="range" min="0" max="1" step="0.1" value="0.5" class="volume-slider" id="volumeSlider"\u003e\n        \u003c/div\u003e\n    \u003c/div\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
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
            sandbox_url: 'https://rljcqm.csb.app/',
            combined_html:
              "\u003c!DOCTYPE html\u003e\n\u003chtml lang=\"en\"\u003e\n\u003chead\u003e\n    \u003cmeta charset=\"UTF-8\"\u003e\n    \u003cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003e\n    \u003ctitle\u003eInteractive Piano Visualization\u003c/title\u003e\n    \u003cstyle\u003e\n        body {\n            margin: 0;\n            padding: 0;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            min-height: 100vh;\n            background: linear-gradient(to bottom, #1a2a6c, #b21f1f, #fdbb2d);\n            font-family: Arial, sans-serif;\n        }\n        .piano-container {\n            background-color: #222;\n            border-radius: 10px;\n            padding: 20px;\n            box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);\n        }\n        .piano {\n            display: flex;\n            position: relative;\n        }\n        .key {\n            position: relative;\n            cursor: pointer;\n            transition: all 0.1s;\n        }\n        .white-key {\n            width: 40px;\n            height: 200px;\n            background: linear-gradient(to bottom, #f0f0f0, #fff);\n            border: 1px solid #ccc;\n            border-radius: 0 0 5px 5px;\n            z-index: 1;\n        }\n        .black-key {\n            width: 25px;\n            height: 120px;\n            background: linear-gradient(to bottom, #333, #000);\n            margin-left: -12.5px;\n            margin-right: -12.5px;\n            z-index: 2;\n            border-radius: 0 0 3px 3px;\n        }\n        .white-key:hover {\n            background: linear-gradient(to bottom, #e0e0e0, #f5f5f5);\n        }\n        .black-key:hover {\n            background: linear-gradient(to bottom, #444, #222);\n        }\n        .white-key:active, .white-key.active {\n            background: linear-gradient(to bottom, #d0d0d0, #e5e5e5);\n            transform: translateY(2px);\n        }\n        .black-key:active, .black-key.active {\n            background: linear-gradient(to bottom, #555, #333);\n            transform: translateY(2px);\n        }\n        .volume-control {\n            margin-top: 20px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            color: #fff;\n        }\n        .volume-slider {\n            width: 200px;\n            margin: 0 10px;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv class=\"piano-container\"\u003e\n        \u003cdiv class=\"piano\" id=\"piano\"\u003e\u003c/div\u003e\n        \u003cdiv class=\"volume-control\"\u003e\n            \u003cspan\u003eVolume:\u003c/span\u003e\n            \u003cinput type=\"range\" min=\"0\" max=\"1\" step=\"0.1\" value=\"0.5\" class=\"volume-slider\" id=\"volumeSlider\"\u003e\n        \u003c/div\u003e\n    \u003c/div\u003e\n    \u003cscript src=\"index.js\"\u003e\u003c/script\u003e\n\u003cscript\u003econst pianoKeys = [\n    { note: 'A0', type: 'white' }, { note: 'A#0', type: 'black' }, { note: 'B0', type: 'white' },\n    { note: 'C1', type: 'white' }, { note: 'C#1', type: 'black' }, { note: 'D1', type: 'white' },\n    { note: 'D#1', type: 'black' }, { note: 'E1', type: 'white' }, { note: 'F1', type: 'white' },\n    { note: 'F#1', type: 'black' }, { note: 'G1', type: 'white' }, { note: 'G#1', type: 'black' },\n    { note: 'A1', type: 'white' }, { note: 'A#1', type: 'black' }, { note: 'B1', type: 'white' },\n    { note: 'C2', type: 'white' }, { note: 'C#2', type: 'black' }, { note: 'D2', type: 'white' },\n    { note: 'D#2', type: 'black' }, { note: 'E2', type: 'white' }, { note: 'F2', type: 'white' },\n    { note: 'F#2', type: 'black' }, { note: 'G2', type: 'white' }, { note: 'G#2', type: 'black' },\n    { note: 'A2', type: 'white' }, { note: 'A#2', type: 'black' }, { note: 'B2', type: 'white' },\n    { note: 'C3', type: 'white' }, { note: 'C#3', type: 'black' }, { note: 'D3', type: 'white' },\n    { note: 'D#3', type: 'black' }, { note: 'E3', type: 'white' }, { note: 'F3', type: 'white' },\n    { note: 'F#3', type: 'black' }, { note: 'G3', type: 'white' }, { note: 'G#3', type: 'black' },\n    { note: 'A3', type: 'white' }, { note: 'A#3', type: 'black' }, { note: 'B3', type: 'white' },\n    { note: 'C4', type: 'white' }, { note: 'C#4', type: 'black' }, { note: 'D4', type: 'white' },\n    { note: 'D#4', type: 'black' }, { note: 'E4', type: 'white' }, { note: 'F4', type: 'white' },\n    { note: 'F#4', type: 'black' }, { note: 'G4', type: 'white' }, { note: 'G#4', type: 'black' },\n    { note: 'A4', type: 'white' }, { note: 'A#4', type: 'black' }, { note: 'B4', type: 'white' },\n    { note: 'C5', type: 'white' }, { note: 'C#5', type: 'black' }, { note: 'D5', type: 'white' },\n    { note: 'D#5', type: 'black' }, { note: 'E5', type: 'white' }, { note: 'F5', type: 'white' },\n    { note: 'F#5', type: 'black' }, { note: 'G5', type: 'white' }, { note: 'G#5', type: 'black' },\n    { note: 'A5', type: 'white' }, { note: 'A#5', type: 'black' }, { note: 'B5', type: 'white' },\n    { note: 'C6', type: 'white' }, { note: 'C#6', type: 'black' }, { note: 'D6', type: 'white' },\n    { note: 'D#6', type: 'black' }, { note: 'E6', type: 'white' }, { note: 'F6', type: 'white' },\n    { note: 'F#6', type: 'black' }, { note: 'G6', type: 'white' }, { note: 'G#6', type: 'black' },\n    { note: 'A6', type: 'white' }, { note: 'A#6', type: 'black' }, { note: 'B6', type: 'white' },\n    { note: 'C7', type: 'white' }, { note: 'C#7', type: 'black' }, { note: 'D7', type: 'white' },\n    { note: 'D#7', type: 'black' }, { note: 'E7', type: 'white' }, { note: 'F7', type: 'white' },\n    { note: 'F#7', type: 'black' }, { note: 'G7', type: 'white' }, { note: 'G#7', type: 'black' },\n    { note: 'A7', type: 'white' }, { note: 'A#7', type: 'black' }, { note: 'B7', type: 'white' },\n    { note: 'C8', type: 'white' }\n];\n\nconst piano = document.getElementById('piano');\nconst volumeSlider = document.getElementById('volumeSlider');\nlet audioContext;\n\nfunction createKey(note, type) {\n    const key = document.createElement('div');\n    key.className = `key ${type}-key`;\n    key.dataset.note = note;\n    key.addEventListener('mousedown', playNote);\n    key.addEventListener('mouseup', stopNote);\n    key.addEventListener('mouseleave', stopNote);\n    return key;\n}\n\nfunction initializePiano() {\n    pianoKeys.forEach(key =\u003e {\n        piano.appendChild(createKey(key.note, key.type));\n    });\n}\n\nfunction playNote(event) {\n    if (!audioContext) {\n        audioContext = new (window.AudioContext || window.webkitAudioContext)();\n    }\n\n    const note = event.target.dataset.note;\n    const frequency = getFrequency(note);\n\n    const oscillator = audioContext.createOscillator();\n    const gainNode = audioContext.createGain();\n\n    oscillator.type = 'sine';\n    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);\n\n    gainNode.gain.setValueAtTime(parseFloat(volumeSlider.value), audioContext.currentTime);\n    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 1);\n\n    oscillator.connect(gainNode);\n    gainNode.connect(audioContext.destination);\n\n    oscillator.start();\n    oscillator.stop(audioContext.currentTime + 1);\n\n    event.target.classList.add('active');\n}\n\nfunction stopNote(event) {\n    event.target.classList.remove('active');\n}\n\nfunction getFrequency(note) {\n    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];\n    const octave = parseInt(note.slice(-1));\n    const semitone = notes.indexOf(note.slice(0, -1));\n    return 440 * Math.pow(2, (octave - 4) + (semitone - 9) / 12);\n}\n\ninitializePiano();\n\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e",
            additional_notes:
              'This solution creates an interactive piano visualization with 88 keys using HTML, CSS, and JavaScript. The piano is responsive and works on different screen sizes. It includes hover effects, key press animations, and sound playback when keys are clicked. A volume slider is implemented to adjust the loudness of the notes. No additional installation is required as it uses only built-in JavaScript features.',
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
    taskId: 'demo1',
    title: 'LLM Code Generation Task (Demo)',
    body: "Create a web page that visualizes a desert landscape using HTML, CSS, and JavaScript. The visualization should include sand dunes, a sun, and at least one cactus. Implement the following interactive features:\n\n1. When the user moves their mouse across the screen, small dust particles should appear and follow the mouse movement, simulating a light breeze in the desert.\n\n2. Allow the user to click anywhere on the screen to 'plant' a new cactus at that location. The cactus should grow from small to full size over a short period of time.\n\nEnsure that the visualization is responsive and works well on different screen sizes. Use only built-in JavaScript functions and avoid external libraries.\nNote:\n- The visualization should be implemented in JavaScript with HTML and CSS.\n- Ensure that the output has both index.js and index.html files\n",
    expireAt: '2099-08-29T18:17:43Z',
    type: 'CODE_GENERATION',
    taskData: {
      task: 'CODE_GENERATION',
      prompt:
        "Create a web page that visualizes a desert landscape using HTML, CSS, and JavaScript. The visualization should include sand dunes, a sun, and at least one cactus. Implement the following interactive features:\n\n1. When the user moves their mouse across the screen, small dust particles should appear and follow the mouse movement, simulating a light breeze in the desert.\n\n2. Allow the user to click anywhere on the screen to 'plant' a new cactus at that location. The cactus should grow from small to full size over a short period of time.\n\nEnsure that the visualization is responsive and works well on different screen sizes. Use only built-in JavaScript functions and avoid external libraries.\nNote:\n- The visualization should be implemented in JavaScript with HTML and CSS.\n- Ensure that the output has both index.js and index.html files\n",
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
          model: 'anthropic/claude-3.5-sonnet',
          completion: {
            files: {
              'index.js': {
                content:
                  "document.addEventListener('DOMContentLoaded', () =\u003e {\n    const desert = document.getElementById('desert');\n    const dustParticles = [];\n\n    // Create initial cactus\n    createCactus(window.innerWidth / 2, window.innerHeight * 0.7);\n\n    // Mouse move event for dust particles\n    desert.addEventListener('mousemove', (e) =\u003e {\n        createDustParticle(e.clientX, e.clientY);\n    });\n\n    // Click event to plant new cactus\n    desert.addEventListener('click', (e) =\u003e {\n        createCactus(e.clientX, e.clientY);\n    });\n\n    function createCactus(x, y) {\n        const cactus = document.createElement('div');\n        cactus.className = 'cactus';\n        cactus.style.left = `${x}px`;\n        cactus.style.bottom = `${window.innerHeight - y}px`;\n        cactus.style.height = '0px';\n        desert.appendChild(cactus);\n\n        setTimeout(() =\u003e {\n            cactus.style.height = '100px';\n        }, 50);\n    }\n\n    function createDustParticle(x, y) {\n        const dust = document.createElement('div');\n        dust.className = 'dust';\n        dust.style.left = `${x}px`;\n        dust.style.top = `${y}px`;\n        desert.appendChild(dust);\n        dustParticles.push(dust);\n\n        if (dustParticles.length \u003e 50) {\n            const oldDust = dustParticles.shift();\n            oldDust.remove();\n        }\n\n        animateDust(dust);\n    }\n\n    function animateDust(dust) {\n        let opacity = 1;\n        let size = 3;\n        let posX = parseFloat(dust.style.left);\n        let posY = parseFloat(dust.style.top);\n\n        function updateDust() {\n            opacity -= 0.02;\n            size -= 0.05;\n            posX += (Math.random() - 0.5) * 2;\n            posY -= 0.5;\n\n            if (opacity \u003c= 0 || size \u003c= 0) {\n                dust.remove();\n                return;\n            }\n\n            dust.style.opacity = opacity;\n            dust.style.width = `${size}px`;\n            dust.style.height = `${size}px`;\n            dust.style.left = `${posX}px`;\n            dust.style.top = `${posY}px`;\n\n            requestAnimationFrame(updateDust);\n        }\n\n        requestAnimationFrame(updateDust);\n    }\n\n    // Responsive design\n    window.addEventListener('resize', () =\u003e {\n        const cacti = document.querySelectorAll('.cactus');\n        cacti.forEach(cactus =\u003e {\n            const bottomPercentage = (parseFloat(cactus.style.bottom) / window.innerHeight) * 100;\n            cactus.style.bottom = `${bottomPercentage}%`;\n        });\n    });\n});\n",
              },
              'index.html': {
                content:
                  '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003eDesert Landscape\u003c/title\u003e\n    \u003cstyle\u003e\n        body, html {\n            margin: 0;\n            padding: 0;\n            height: 100%;\n            overflow: hidden;\n        }\n        #desert {\n            width: 100%;\n            height: 100%;\n            background: linear-gradient(#ffd700, #ffa500);\n            position: relative;\n            overflow: hidden;\n        }\n        .sand-dune {\n            position: absolute;\n            bottom: 0;\n            width: 100%;\n            height: 30%;\n            background: #d2b48c;\n            border-radius: 50% 50% 0 0;\n        }\n        #sun {\n            position: absolute;\n            top: 10%;\n            left: 10%;\n            width: 100px;\n            height: 100px;\n            background: #ff6347;\n            border-radius: 50%;\n            box-shadow: 0 0 50px #ff6347;\n        }\n        .cactus {\n            position: absolute;\n            bottom: 30%;\n            width: 40px;\n            background: #2e8b57;\n            border-radius: 10px;\n            transition: height 1s ease-out;\n        }\n        .cactus::before, .cactus::after {\n            content: \'\';\n            position: absolute;\n            background: #2e8b57;\n            width: 20px;\n            height: 30px;\n            border-radius: 10px;\n        }\n        .cactus::before {\n            left: -15px;\n            top: 30%;\n            transform: rotate(45deg);\n        }\n        .cactus::after {\n            right: -15px;\n            top: 60%;\n            transform: rotate(-45deg);\n        }\n        .dust {\n            position: absolute;\n            width: 3px;\n            height: 3px;\n            background: rgba(210, 180, 140, 0.7);\n            border-radius: 50%;\n            pointer-events: none;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv id="desert"\u003e\n        \u003cdiv id="sun"\u003e\u003c/div\u003e\n        \u003cdiv class="sand-dune"\u003e\u003c/div\u003e\n    \u003c/div\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
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
            sandbox_url: 'https://v27zjm.csb.app/',
            combined_html:
              "\u003c!DOCTYPE html\u003e\n\u003chtml lang=\"en\"\u003e\n\u003chead\u003e\n    \u003cmeta charset=\"UTF-8\"\u003e\n    \u003cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003e\n    \u003ctitle\u003eDesert Landscape\u003c/title\u003e\n    \u003cstyle\u003e\n        body, html {\n            margin: 0;\n            padding: 0;\n            height: 100%;\n            overflow: hidden;\n        }\n        #desert {\n            width: 100%;\n            height: 100%;\n            background: linear-gradient(#ffd700, #ffa500);\n            position: relative;\n            overflow: hidden;\n        }\n        .sand-dune {\n            position: absolute;\n            bottom: 0;\n            width: 100%;\n            height: 30%;\n            background: #d2b48c;\n            border-radius: 50% 50% 0 0;\n        }\n        #sun {\n            position: absolute;\n            top: 10%;\n            left: 10%;\n            width: 100px;\n            height: 100px;\n            background: #ff6347;\n            border-radius: 50%;\n            box-shadow: 0 0 50px #ff6347;\n        }\n        .cactus {\n            position: absolute;\n            bottom: 30%;\n            width: 40px;\n            background: #2e8b57;\n            border-radius: 10px;\n            transition: height 1s ease-out;\n        }\n        .cactus::before, .cactus::after {\n            content: '';\n            position: absolute;\n            background: #2e8b57;\n            width: 20px;\n            height: 30px;\n            border-radius: 10px;\n        }\n        .cactus::before {\n            left: -15px;\n            top: 30%;\n            transform: rotate(45deg);\n        }\n        .cactus::after {\n            right: -15px;\n            top: 60%;\n            transform: rotate(-45deg);\n        }\n        .dust {\n            position: absolute;\n            width: 3px;\n            height: 3px;\n            background: rgba(210, 180, 140, 0.7);\n            border-radius: 50%;\n            pointer-events: none;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv id=\"desert\"\u003e\n        \u003cdiv id=\"sun\"\u003e\u003c/div\u003e\n        \u003cdiv class=\"sand-dune\"\u003e\u003c/div\u003e\n    \u003c/div\u003e\n    \u003cscript src=\"index.js\"\u003e\u003c/script\u003e\n\u003cscript\u003edocument.addEventListener('DOMContentLoaded', () =\u003e {\n    const desert = document.getElementById('desert');\n    const dustParticles = [];\n\n    // Create initial cactus\n    createCactus(window.innerWidth / 2, window.innerHeight * 0.7);\n\n    // Mouse move event for dust particles\n    desert.addEventListener('mousemove', (e) =\u003e {\n        createDustParticle(e.clientX, e.clientY);\n    });\n\n    // Click event to plant new cactus\n    desert.addEventListener('click', (e) =\u003e {\n        createCactus(e.clientX, e.clientY);\n    });\n\n    function createCactus(x, y) {\n        const cactus = document.createElement('div');\n        cactus.className = 'cactus';\n        cactus.style.left = `${x}px`;\n        cactus.style.bottom = `${window.innerHeight - y}px`;\n        cactus.style.height = '0px';\n        desert.appendChild(cactus);\n\n        setTimeout(() =\u003e {\n            cactus.style.height = '100px';\n        }, 50);\n    }\n\n    function createDustParticle(x, y) {\n        const dust = document.createElement('div');\n        dust.className = 'dust';\n        dust.style.left = `${x}px`;\n        dust.style.top = `${y}px`;\n        desert.appendChild(dust);\n        dustParticles.push(dust);\n\n        if (dustParticles.length \u003e 50) {\n            const oldDust = dustParticles.shift();\n            oldDust.remove();\n        }\n\n        animateDust(dust);\n    }\n\n    function animateDust(dust) {\n        let opacity = 1;\n        let size = 3;\n        let posX = parseFloat(dust.style.left);\n        let posY = parseFloat(dust.style.top);\n\n        function updateDust() {\n            opacity -= 0.02;\n            size -= 0.05;\n            posX += (Math.random() - 0.5) * 2;\n            posY -= 0.5;\n\n            if (opacity \u003c= 0 || size \u003c= 0) {\n                dust.remove();\n                return;\n            }\n\n            dust.style.opacity = opacity;\n            dust.style.width = `${size}px`;\n            dust.style.height = `${size}px`;\n            dust.style.left = `${posX}px`;\n            dust.style.top = `${posY}px`;\n\n            requestAnimationFrame(updateDust);\n        }\n\n        requestAnimationFrame(updateDust);\n    }\n\n    // Responsive design\n    window.addEventListener('resize', () =\u003e {\n        const cacti = document.querySelectorAll('.cactus');\n        cacti.forEach(cactus =\u003e {\n            const bottomPercentage = (parseFloat(cactus.style.bottom) / window.innerHeight) * 100;\n            cactus.style.bottom = `${bottomPercentage}%`;\n        });\n    });\n});\n\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e",
            additional_notes: null,
            installation_commands: '',
          },
        },
        {
          model: 'anthropic/claude-3.5-sonnet',
          completion: {
            files: {
              'index.js': {
                content:
                  "document.addEventListener('DOMContentLoaded', () =\u003e {\n    const desert = document.getElementById('desert');\n    const dustParticles = [];\n\n    function createCactus(x, y) {\n        const cactus = document.createElement('div');\n        cactus.className = 'cactus';\n        cactus.style.left = `${x}px`;\n        cactus.style.height = '0';\n        desert.appendChild(cactus);\n\n        setTimeout(() =\u003e {\n            cactus.style.height = `${Math.random() * 50 + 50}px`;\n        }, 50);\n    }\n\n    function createDustParticle(x, y) {\n        const dust = document.createElement('div');\n        dust.className = 'dust';\n        dust.style.left = `${x}px`;\n        dust.style.top = `${y}px`;\n        desert.appendChild(dust);\n        dustParticles.push(dust);\n\n        if (dustParticles.length \u003e 50) {\n            const oldDust = dustParticles.shift();\n            oldDust.remove();\n        }\n    }\n\n    function moveDustParticles(mouseX, mouseY) {\n        dustParticles.forEach(dust =\u003e {\n            const dx = mouseX - parseInt(dust.style.left);\n            const dy = mouseY - parseInt(dust.style.top);\n            const distance = Math.sqrt(dx * dx + dy * dy);\n            const speed = 5;\n\n            if (distance \u003e 1) {\n                dust.style.left = `${parseInt(dust.style.left) + dx / distance * speed}px`;\n                dust.style.top = `${parseInt(dust.style.top) + dy / distance * speed}px`;\n            }\n        });\n    }\n\n    desert.addEventListener('click', (event) =\u003e {\n        createCactus(event.clientX, event.clientY);\n    });\n\n    desert.addEventListener('mousemove', (event) =\u003e {\n        createDustParticle(event.clientX, event.clientY);\n        moveDustParticles(event.clientX, event.clientY);\n    });\n\n    // Create initial cactus\n    createCactus(Math.random() * window.innerWidth, window.innerHeight * 0.7);\n});\n",
              },
              'index.html': {
                content:
                  '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003eDesert Landscape\u003c/title\u003e\n    \u003cstyle\u003e\n        body, html {\n            margin: 0;\n            padding: 0;\n            height: 100%;\n            overflow: hidden;\n        }\n        #desert {\n            width: 100%;\n            height: 100%;\n            background: linear-gradient(#ffd700, #ff8c00);\n            position: relative;\n            overflow: hidden;\n        }\n        .sand-dune {\n            position: absolute;\n            bottom: 0;\n            width: 100%;\n            height: 30%;\n            background: #d2b48c;\n            border-radius: 50% 50% 0 0;\n        }\n        #sun {\n            position: absolute;\n            top: 10%;\n            left: 10%;\n            width: 100px;\n            height: 100px;\n            background: #ff6347;\n            border-radius: 50%;\n            box-shadow: 0 0 50px #ff6347;\n        }\n        .cactus {\n            position: absolute;\n            bottom: 30%;\n            width: 20px;\n            background-color: #2e8b57;\n            border-radius: 10px;\n            transition: height 1s ease-out;\n        }\n        .cactus::before, .cactus::after {\n            content: \'\';\n            position: absolute;\n            background-color: #2e8b57;\n            border-radius: 50%;\n        }\n        .cactus::before {\n            width: 10px;\n            height: 20px;\n            top: 20%;\n            left: -10px;\n        }\n        .cactus::after {\n            width: 10px;\n            height: 20px;\n            top: 40%;\n            right: -10px;\n        }\n        .dust {\n            position: absolute;\n            width: 2px;\n            height: 2px;\n            background-color: rgba(210, 180, 140, 0.7);\n            border-radius: 50%;\n            pointer-events: none;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv id="desert"\u003e\n        \u003cdiv id="sun"\u003e\u003c/div\u003e\n        \u003cdiv class="sand-dune"\u003e\u003c/div\u003e\n    \u003c/div\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
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
            sandbox_url: 'https://sz9m4d.csb.app/',
            combined_html:
              "\u003c!DOCTYPE html\u003e\n\u003chtml lang=\"en\"\u003e\n\u003chead\u003e\n    \u003cmeta charset=\"UTF-8\"\u003e\n    \u003cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003e\n    \u003ctitle\u003eDesert Landscape\u003c/title\u003e\n    \u003cstyle\u003e\n        body, html {\n            margin: 0;\n            padding: 0;\n            height: 100%;\n            overflow: hidden;\n        }\n        #desert {\n            width: 100%;\n            height: 100%;\n            background: linear-gradient(#ffd700, #ff8c00);\n            position: relative;\n            overflow: hidden;\n        }\n        .sand-dune {\n            position: absolute;\n            bottom: 0;\n            width: 100%;\n            height: 30%;\n            background: #d2b48c;\n            border-radius: 50% 50% 0 0;\n        }\n        #sun {\n            position: absolute;\n            top: 10%;\n            left: 10%;\n            width: 100px;\n            height: 100px;\n            background: #ff6347;\n            border-radius: 50%;\n            box-shadow: 0 0 50px #ff6347;\n        }\n        .cactus {\n            position: absolute;\n            bottom: 30%;\n            width: 20px;\n            background-color: #2e8b57;\n            border-radius: 10px;\n            transition: height 1s ease-out;\n        }\n        .cactus::before, .cactus::after {\n            content: '';\n            position: absolute;\n            background-color: #2e8b57;\n            border-radius: 50%;\n        }\n        .cactus::before {\n            width: 10px;\n            height: 20px;\n            top: 20%;\n            left: -10px;\n        }\n        .cactus::after {\n            width: 10px;\n            height: 20px;\n            top: 40%;\n            right: -10px;\n        }\n        .dust {\n            position: absolute;\n            width: 2px;\n            height: 2px;\n            background-color: rgba(210, 180, 140, 0.7);\n            border-radius: 50%;\n            pointer-events: none;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv id=\"desert\"\u003e\n        \u003cdiv id=\"sun\"\u003e\u003c/div\u003e\n        \u003cdiv class=\"sand-dune\"\u003e\u003c/div\u003e\n    \u003c/div\u003e\n    \u003cscript src=\"index.js\"\u003e\u003c/script\u003e\n\u003cscript\u003edocument.addEventListener('DOMContentLoaded', () =\u003e {\n    const desert = document.getElementById('desert');\n    const dustParticles = [];\n\n    function createCactus(x, y) {\n        const cactus = document.createElement('div');\n        cactus.className = 'cactus';\n        cactus.style.left = `${x}px`;\n        cactus.style.height = '0';\n        desert.appendChild(cactus);\n\n        setTimeout(() =\u003e {\n            cactus.style.height = `${Math.random() * 50 + 50}px`;\n        }, 50);\n    }\n\n    function createDustParticle(x, y) {\n        const dust = document.createElement('div');\n        dust.className = 'dust';\n        dust.style.left = `${x}px`;\n        dust.style.top = `${y}px`;\n        desert.appendChild(dust);\n        dustParticles.push(dust);\n\n        if (dustParticles.length \u003e 50) {\n            const oldDust = dustParticles.shift();\n            oldDust.remove();\n        }\n    }\n\n    function moveDustParticles(mouseX, mouseY) {\n        dustParticles.forEach(dust =\u003e {\n            const dx = mouseX - parseInt(dust.style.left);\n            const dy = mouseY - parseInt(dust.style.top);\n            const distance = Math.sqrt(dx * dx + dy * dy);\n            const speed = 5;\n\n            if (distance \u003e 1) {\n                dust.style.left = `${parseInt(dust.style.left) + dx / distance * speed}px`;\n                dust.style.top = `${parseInt(dust.style.top) + dy / distance * speed}px`;\n            }\n        });\n    }\n\n    desert.addEventListener('click', (event) =\u003e {\n        createCactus(event.clientX, event.clientY);\n    });\n\n    desert.addEventListener('mousemove', (event) =\u003e {\n        createDustParticle(event.clientX, event.clientY);\n        moveDustParticles(event.clientX, event.clientY);\n    });\n\n    // Create initial cactus\n    createCactus(Math.random() * window.innerWidth, window.innerHeight * 0.7);\n});\n\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e",
            additional_notes:
              'This solution creates a responsive desert landscape with interactive features as requested. The HTML file sets up the structure and styling, while the JavaScript file handles the interactivity. No external libraries or installation commands are required.',
            installation_commands: '',
          },
        },
        {
          model: 'anthropic/claude-3.5-sonnet',
          completion: {
            files: {
              'index.js': {
                content:
                  "document.addEventListener('DOMContentLoaded', () =\u003e {\n    const ocean = document.getElementById('ocean');\n    const sand = document.getElementById('sand');\n\n    // Create initial scene elements\n    createSeaweed(5);\n    createRocks(3);\n    createStarfish(2);\n\n    // Mouse move event for bubbles\n    ocean.addEventListener('mousemove', createBubble);\n\n    // Click event for spawning fish\n    ocean.addEventListener('click', spawnFish);\n});\n\nfunction createSeaweed(count) {\n    const ocean = document.getElementById('ocean');\n    for (let i = 0; i \u003c count; i++) {\n        const seaweed = document.createElement('div');\n        seaweed.className = 'seaweed';\n        seaweed.style.left = `${Math.random() * 100}%`;\n        seaweed.style.height = `${Math.random() * 10 + 10}%`;\n        ocean.appendChild(seaweed);\n    }\n}\n\nfunction createRocks(count) {\n    const ocean = document.getElementById('ocean');\n    for (let i = 0; i \u003c count; i++) {\n        const rock = document.createElement('div');\n        rock.className = 'rock';\n        rock.style.left = `${Math.random() * 100}%`;\n        rock.style.width = `${Math.random() * 50 + 20}px`;\n        rock.style.height = `${Math.random() * 30 + 15}px`;\n        ocean.appendChild(rock);\n    }\n}\n\nfunction createStarfish(count) {\n    const ocean = document.getElementById('ocean');\n    for (let i = 0; i \u003c count; i++) {\n        const star = document.createElement('div');\n        star.className = 'star';\n        star.style.left = `${Math.random() * 100}%`;\n        star.style.bottom = `${Math.random() * 5 + 20}%`;\n        ocean.appendChild(star);\n    }\n}\n\nfunction createBubble(event) {\n    const bubble = document.createElement('div');\n    bubble.className = 'bubble';\n    bubble.style.left = `${event.clientX}px`;\n    bubble.style.top = `${event.clientY}px`;\n    bubble.style.width = `${Math.random() * 10 + 5}px`;\n    bubble.style.height = bubble.style.width;\n    document.getElementById('ocean').appendChild(bubble);\n\n    // Remove bubble after animation\n    bubble.addEventListener('animationend', () =\u003e {\n        bubble.remove();\n    });\n}\n\nfunction spawnFish(event) {\n    const fish = document.createElement('div');\n    fish.className = 'fish';\n    fish.style.left = `${event.clientX}px`;\n    fish.style.top = `${event.clientY}px`;\n    fish.style.transform = 'scale(0)';\n    document.getElementById('ocean').appendChild(fish);\n\n    // Grow fish\n    setTimeout(() =\u003e {\n        fish.style.transform = 'scale(1)';\n    }, 50);\n\n    // Random movement\n    setInterval(() =\u003e {\n        const x = parseFloat(fish.style.left) + (Math.random() - 0.5) * 20;\n        const y = parseFloat(fish.style.top) + (Math.random() - 0.5) * 20;\n        fish.style.left = `${Math.max(0, Math.min(window.innerWidth - 60, x))}px`;\n        fish.style.top = `${Math.max(0, Math.min(window.innerHeight - 30, y))}px`;\n    }, 1000);\n}",
              },
              'index.html': {
                content:
                  '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003eUnderwater Scene\u003c/title\u003e\n    \u003clink rel="stylesheet" href="styles.css"\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv id="ocean"\u003e\n        \u003cdiv id="sand"\u003e\u003c/div\u003e\n    \u003c/div\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
              },
              'styles.css': {
                content:
                  "body, html {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    overflow: hidden;\n}\n\n#ocean {\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(to bottom, #006994, #00008B);\n    position: relative;\n    overflow: hidden;\n}\n\n#sand {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 20%;\n    background-color: #C2B280;\n}\n\n.bubble {\n    position: absolute;\n    background-color: rgba(255, 255, 255, 0.3);\n    border-radius: 50%;\n    animation: float 4s ease-in infinite;\n}\n\n@keyframes float {\n    0% {\n        transform: translateY(0);\n        opacity: 0;\n    }\n    50% {\n        opacity: 1;\n    }\n    100% {\n        transform: translateY(-100vh);\n        opacity: 0;\n    }\n}\n\n.fish {\n    position: absolute;\n    width: 60px;\n    height: 30px;\n    background-color: #FF6347;\n    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;\n    transition: all 0.5s;\n}\n\n.fish::before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    right: -10px;\n    width: 20px;\n    height: 20px;\n    background-color: #FF6347;\n    clip-path: polygon(0 0, 0 100%, 100% 50%);\n    transform: translateY(-50%);\n}\n\n.fish::after {\n    content: '';\n    position: absolute;\n    top: 25%;\n    left: 10px;\n    width: 5px;\n    height: 5px;\n    background-color: white;\n    border-radius: 50%;\n}\n\n.seaweed {\n    position: absolute;\n    bottom: 20%;\n    width: 10px;\n    background-color: #228B22;\n    animation: sway 3s ease-in-out infinite alternate;\n}\n\n@keyframes sway {\n    0% {\n        transform: rotate(-5deg);\n    }\n    100% {\n        transform: rotate(5deg);\n    }\n}\n\n.rock {\n    position: absolute;\n    bottom: 20%;\n    background-color: #808080;\n    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;\n}\n\n.star {\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    border-bottom: 20px solid #FFD700;\n    transform: rotate(35deg);\n}\n\n.star:before {\n    content: '';\n    position: absolute;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    border-bottom: 20px solid #FFD700;\n    transform: rotate(-70deg);\n    top: -13px;\n    left: -10px;\n}\n\n.star:after {\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    border-bottom: 20px solid #FFD700;\n    transform: rotate(-70deg);\n    top: 3px;\n    left: -20px;\n}",
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
            sandbox_url: 'https://v2x9df.csb.app/',
            combined_html:
              "\u003c!DOCTYPE html\u003e\n\u003chtml lang=\"en\"\u003e\n\u003chead\u003e\n    \u003cmeta charset=\"UTF-8\"\u003e\n    \u003cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003e\n    \u003ctitle\u003eUnderwater Scene\u003c/title\u003e\n    \u003clink rel=\"stylesheet\" href=\"styles.css\"\u003e\n\u003cstyle\u003ebody, html {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    overflow: hidden;\n}\n\n#ocean {\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(to bottom, #006994, #00008B);\n    position: relative;\n    overflow: hidden;\n}\n\n#sand {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 20%;\n    background-color: #C2B280;\n}\n\n.bubble {\n    position: absolute;\n    background-color: rgba(255, 255, 255, 0.3);\n    border-radius: 50%;\n    animation: float 4s ease-in infinite;\n}\n\n@keyframes float {\n    0% {\n        transform: translateY(0);\n        opacity: 0;\n    }\n    50% {\n        opacity: 1;\n    }\n    100% {\n        transform: translateY(-100vh);\n        opacity: 0;\n    }\n}\n\n.fish {\n    position: absolute;\n    width: 60px;\n    height: 30px;\n    background-color: #FF6347;\n    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;\n    transition: all 0.5s;\n}\n\n.fish::before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    right: -10px;\n    width: 20px;\n    height: 20px;\n    background-color: #FF6347;\n    clip-path: polygon(0 0, 0 100%, 100% 50%);\n    transform: translateY(-50%);\n}\n\n.fish::after {\n    content: '';\n    position: absolute;\n    top: 25%;\n    left: 10px;\n    width: 5px;\n    height: 5px;\n    background-color: white;\n    border-radius: 50%;\n}\n\n.seaweed {\n    position: absolute;\n    bottom: 20%;\n    width: 10px;\n    background-color: #228B22;\n    animation: sway 3s ease-in-out infinite alternate;\n}\n\n@keyframes sway {\n    0% {\n        transform: rotate(-5deg);\n    }\n    100% {\n        transform: rotate(5deg);\n    }\n}\n\n.rock {\n    position: absolute;\n    bottom: 20%;\n    background-color: #808080;\n    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;\n}\n\n.star {\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    border-bottom: 20px solid #FFD700;\n    transform: rotate(35deg);\n}\n\n.star:before {\n    content: '';\n    position: absolute;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    border-bottom: 20px solid #FFD700;\n    transform: rotate(-70deg);\n    top: -13px;\n    left: -10px;\n}\n\n.star:after {\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    border-bottom: 20px solid #FFD700;\n    transform: rotate(-70deg);\n    top: 3px;\n    left: -20px;\n}\u003c/style\u003e\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv id=\"ocean\"\u003e\n        \u003cdiv id=\"sand\"\u003e\u003c/div\u003e\n    \u003c/div\u003e\n    \u003cscript src=\"index.js\"\u003e\u003c/script\u003e\n\u003cscript\u003edocument.addEventListener('DOMContentLoaded', () =\u003e {\n    const ocean = document.getElementById('ocean');\n    const sand = document.getElementById('sand');\n\n    // Create initial scene elements\n    createSeaweed(5);\n    createRocks(3);\n    createStarfish(2);\n\n    // Mouse move event for bubbles\n    ocean.addEventListener('mousemove', createBubble);\n\n    // Click event for spawning fish\n    ocean.addEventListener('click', spawnFish);\n});\n\nfunction createSeaweed(count) {\n    const ocean = document.getElementById('ocean');\n    for (let i = 0; i \u003c count; i++) {\n        const seaweed = document.createElement('div');\n        seaweed.className = 'seaweed';\n        seaweed.style.left = `${Math.random() * 100}%`;\n        seaweed.style.height = `${Math.random() * 10 + 10}%`;\n        ocean.appendChild(seaweed);\n    }\n}\n\nfunction createRocks(count) {\n    const ocean = document.getElementById('ocean');\n    for (let i = 0; i \u003c count; i++) {\n        const rock = document.createElement('div');\n        rock.className = 'rock';\n        rock.style.left = `${Math.random() * 100}%`;\n        rock.style.width = `${Math.random() * 50 + 20}px`;\n        rock.style.height = `${Math.random() * 30 + 15}px`;\n        ocean.appendChild(rock);\n    }\n}\n\nfunction createStarfish(count) {\n    const ocean = document.getElementById('ocean');\n    for (let i = 0; i \u003c count; i++) {\n        const star = document.createElement('div');\n        star.className = 'star';\n        star.style.left = `${Math.random() * 100}%`;\n        star.style.bottom = `${Math.random() * 5 + 20}%`;\n        ocean.appendChild(star);\n    }\n}\n\nfunction createBubble(event) {\n    const bubble = document.createElement('div');\n    bubble.className = 'bubble';\n    bubble.style.left = `${event.clientX}px`;\n    bubble.style.top = `${event.clientY}px`;\n    bubble.style.width = `${Math.random() * 10 + 5}px`;\n    bubble.style.height = bubble.style.width;\n    document.getElementById('ocean').appendChild(bubble);\n\n    // Remove bubble after animation\n    bubble.addEventListener('animationend', () =\u003e {\n        bubble.remove();\n    });\n}\n\nfunction spawnFish(event) {\n    const fish = document.createElement('div');\n    fish.className = 'fish';\n    fish.style.left = `${event.clientX}px`;\n    fish.style.top = `${event.clientY}px`;\n    fish.style.transform = 'scale(0)';\n    document.getElementById('ocean').appendChild(fish);\n\n    // Grow fish\n    setTimeout(() =\u003e {\n        fish.style.transform = 'scale(1)';\n    }, 50);\n\n    // Random movement\n    setInterval(() =\u003e {\n        const x = parseFloat(fish.style.left) + (Math.random() - 0.5) * 20;\n        const y = parseFloat(fish.style.top) + (Math.random() - 0.5) * 20;\n        fish.style.left = `${Math.max(0, Math.min(window.innerWidth - 60, x))}px`;\n        fish.style.top = `${Math.max(0, Math.min(window.innerHeight - 30, y))}px`;\n    }, 1000);\n}\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e",
            additional_notes:
              'This solution creates an interactive underwater scene with a sandy ocean floor, bubbles, and fish. It uses only built-in JavaScript functions and is responsive to different screen sizes. The scene includes seaweed, rocks, and starfish for added visual interest. Bubbles appear and float upwards when the mouse moves, and clicking spawns new fish that grow to full size.',
            installation_commands: '',
          },
        },
        {
          model: 'anthropic/claude-3.5-sonnet',
          completion: {
            files: {
              'index.js': {
                content:
                  "document.addEventListener('DOMContentLoaded', () =\u003e {\n    const desert = document.getElementById('desert');\n    const dustParticles = [];\n\n    function createCactus(x, y) {\n        const cactus = document.createElement('div');\n        cactus.className = 'cactus';\n        cactus.style.left = `${x}px`;\n        cactus.style.height = '0';\n        desert.appendChild(cactus);\n\n        setTimeout(() =\u003e {\n            cactus.style.height = `${Math.random() * 50 + 50}px`;\n        }, 50);\n    }\n\n    function createDustParticle(x, y) {\n        const dust = document.createElement('div');\n        dust.className = 'dust';\n        dust.style.left = `${x}px`;\n        dust.style.top = `${y}px`;\n        desert.appendChild(dust);\n        dustParticles.push(dust);\n\n        if (dustParticles.length \u003e 50) {\n            const oldDust = dustParticles.shift();\n            oldDust.remove();\n        }\n    }\n\n    function updateDustParticles(mouseX, mouseY) {\n        dustParticles.forEach((dust, index) =\u003e {\n            const x = parseFloat(dust.style.left);\n            const y = parseFloat(dust.style.top);\n            const dx = (mouseX - x) * 0.05;\n            const dy = (mouseY - y) * 0.05;\n            dust.style.left = `${x + dx}px`;\n            dust.style.top = `${y + dy}px`;\n            dust.style.opacity = 1 - index / dustParticles.length;\n        });\n    }\n\n    desert.addEventListener('click', (e) =\u003e {\n        createCactus(e.clientX, e.clientY);\n    });\n\n    desert.addEventListener('mousemove', (e) =\u003e {\n        createDustParticle(e.clientX, e.clientY);\n        updateDustParticles(e.clientX, e.clientY);\n    });\n\n    // Create initial cactus\n    createCactus(Math.random() * window.innerWidth, window.innerHeight * 0.7);\n});\n",
              },
              'index.html': {
                content:
                  '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003eDesert Landscape\u003c/title\u003e\n    \u003cstyle\u003e\n        body, html {\n            margin: 0;\n            padding: 0;\n            height: 100%;\n            overflow: hidden;\n        }\n        #desert {\n            width: 100%;\n            height: 100%;\n            background: linear-gradient(#ffd700, #ffa500);\n            position: relative;\n            overflow: hidden;\n        }\n        .sand-dune {\n            position: absolute;\n            bottom: 0;\n            width: 100%;\n            height: 30%;\n            background: #d2b48c;\n            border-radius: 50% 50% 0 0;\n        }\n        #sun {\n            position: absolute;\n            top: 10%;\n            left: 10%;\n            width: 80px;\n            height: 80px;\n            background: #ff6347;\n            border-radius: 50%;\n            box-shadow: 0 0 20px #ff6347;\n        }\n        .cactus {\n            position: absolute;\n            bottom: 30%;\n            width: 20px;\n            background-color: #2e8b57;\n            border-radius: 10px;\n            transition: height 1s ease-out;\n        }\n        .cactus::before, .cactus::after {\n            content: \'\';\n            position: absolute;\n            background-color: #2e8b57;\n            border-radius: 50%;\n        }\n        .cactus::before {\n            width: 10px;\n            height: 20px;\n            top: 20%;\n            left: -10px;\n        }\n        .cactus::after {\n            width: 10px;\n            height: 20px;\n            top: 40%;\n            right: -10px;\n        }\n        .dust {\n            position: absolute;\n            width: 2px;\n            height: 2px;\n            background-color: rgba(210, 180, 140, 0.7);\n            border-radius: 50%;\n            pointer-events: none;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv id="desert"\u003e\n        \u003cdiv id="sun"\u003e\u003c/div\u003e\n        \u003cdiv class="sand-dune"\u003e\u003c/div\u003e\n    \u003c/div\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
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
            sandbox_url: 'https://cts8ly.csb.app/',
            combined_html:
              "\u003c!DOCTYPE html\u003e\n\u003chtml lang=\"en\"\u003e\n\u003chead\u003e\n    \u003cmeta charset=\"UTF-8\"\u003e\n    \u003cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003e\n    \u003ctitle\u003eDesert Landscape\u003c/title\u003e\n    \u003cstyle\u003e\n        body, html {\n            margin: 0;\n            padding: 0;\n            height: 100%;\n            overflow: hidden;\n        }\n        #desert {\n            width: 100%;\n            height: 100%;\n            background: linear-gradient(#ffd700, #ffa500);\n            position: relative;\n            overflow: hidden;\n        }\n        .sand-dune {\n            position: absolute;\n            bottom: 0;\n            width: 100%;\n            height: 30%;\n            background: #d2b48c;\n            border-radius: 50% 50% 0 0;\n        }\n        #sun {\n            position: absolute;\n            top: 10%;\n            left: 10%;\n            width: 80px;\n            height: 80px;\n            background: #ff6347;\n            border-radius: 50%;\n            box-shadow: 0 0 20px #ff6347;\n        }\n        .cactus {\n            position: absolute;\n            bottom: 30%;\n            width: 20px;\n            background-color: #2e8b57;\n            border-radius: 10px;\n            transition: height 1s ease-out;\n        }\n        .cactus::before, .cactus::after {\n            content: '';\n            position: absolute;\n            background-color: #2e8b57;\n            border-radius: 50%;\n        }\n        .cactus::before {\n            width: 10px;\n            height: 20px;\n            top: 20%;\n            left: -10px;\n        }\n        .cactus::after {\n            width: 10px;\n            height: 20px;\n            top: 40%;\n            right: -10px;\n        }\n        .dust {\n            position: absolute;\n            width: 2px;\n            height: 2px;\n            background-color: rgba(210, 180, 140, 0.7);\n            border-radius: 50%;\n            pointer-events: none;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv id=\"desert\"\u003e\n        \u003cdiv id=\"sun\"\u003e\u003c/div\u003e\n        \u003cdiv class=\"sand-dune\"\u003e\u003c/div\u003e\n    \u003c/div\u003e\n    \u003cscript src=\"index.js\"\u003e\u003c/script\u003e\n\u003cscript\u003edocument.addEventListener('DOMContentLoaded', () =\u003e {\n    const desert = document.getElementById('desert');\n    const dustParticles = [];\n\n    function createCactus(x, y) {\n        const cactus = document.createElement('div');\n        cactus.className = 'cactus';\n        cactus.style.left = `${x}px`;\n        cactus.style.height = '0';\n        desert.appendChild(cactus);\n\n        setTimeout(() =\u003e {\n            cactus.style.height = `${Math.random() * 50 + 50}px`;\n        }, 50);\n    }\n\n    function createDustParticle(x, y) {\n        const dust = document.createElement('div');\n        dust.className = 'dust';\n        dust.style.left = `${x}px`;\n        dust.style.top = `${y}px`;\n        desert.appendChild(dust);\n        dustParticles.push(dust);\n\n        if (dustParticles.length \u003e 50) {\n            const oldDust = dustParticles.shift();\n            oldDust.remove();\n        }\n    }\n\n    function updateDustParticles(mouseX, mouseY) {\n        dustParticles.forEach((dust, index) =\u003e {\n            const x = parseFloat(dust.style.left);\n            const y = parseFloat(dust.style.top);\n            const dx = (mouseX - x) * 0.05;\n            const dy = (mouseY - y) * 0.05;\n            dust.style.left = `${x + dx}px`;\n            dust.style.top = `${y + dy}px`;\n            dust.style.opacity = 1 - index / dustParticles.length;\n        });\n    }\n\n    desert.addEventListener('click', (e) =\u003e {\n        createCactus(e.clientX, e.clientY);\n    });\n\n    desert.addEventListener('mousemove', (e) =\u003e {\n        createDustParticle(e.clientX, e.clientY);\n        updateDustParticles(e.clientX, e.clientY);\n    });\n\n    // Create initial cactus\n    createCactus(Math.random() * window.innerWidth, window.innerHeight * 0.7);\n});\n\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e",
            additional_notes:
              'This solution creates a responsive desert landscape with interactive features as requested. The visualization includes sand dunes, a sun, and cactuses. Users can click to plant new cactuses and move the mouse to create dust particles. The code is implemented using only built-in JavaScript functions without external libraries.',
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
    taskId: 'cb0a5dc5-c921-4050-b460-053697e451f3',
    title: 'LLM Code Generation Task',
    body: 'Create an interactive visualization of a sound wave frequency visualizer using HTML, CSS, and JavaScript. Your implementation should meet the following requirements:\n\n1. Display a dynamic waveform that represents the frequency of a sound wave. The waveform should update in real-time based on user input.\n\n2. Implement a slider that allows users to adjust the frequency of the sound wave. As the user moves the slider, the waveform should change accordingly, showing higher frequencies as more compressed waves and lower frequencies as more stretched out waves.\n\n3. Add a play/pause button that, when clicked, generates an audible tone matching the current frequency shown in the visualizer. The waveform should animate (oscillate) while the tone is playing and stop when paused.\n\nEnsure that the visualization is visually appealing and that the user interactions are intuitive and responsive. The implementation should use only built-in JavaScript libraries and functions.\nNote:\n- The visualization should be implemented in JavaScript with HTML and CSS.\n- Ensure that the output has both index.js and index.html files\n',
    expireAt: '2025-09-05T19:39:33Z',
    type: 'CODE_GENERATION',
    taskData: {
      task: 'CODE_GENERATION',
      prompt:
        'Create an interactive visualization of a sound wave frequency visualizer using HTML, CSS, and JavaScript. Your implementation should meet the following requirements:\n\n1. Display a dynamic waveform that represents the frequency of a sound wave. The waveform should update in real-time based on user input.\n\n2. Implement a slider that allows users to adjust the frequency of the sound wave. As the user moves the slider, the waveform should change accordingly, showing higher frequencies as more compressed waves and lower frequencies as more stretched out waves.\n\n3. Add a play/pause button that, when clicked, generates an audible tone matching the current frequency shown in the visualizer. The waveform should animate (oscillate) while the tone is playing and stop when paused.\n\nEnsure that the visualization is visually appealing and that the user interactions are intuitive and responsive. The implementation should use only built-in JavaScript libraries and functions.\nNote:\n- The visualization should be implemented in JavaScript with HTML and CSS.\n- Ensure that the output has both index.js and index.html files\n',
      criteria: [
        {
          max: 100,
          min: 1,
          type: 'multi-score',
          options: [
            'anthropic/claude-3.5-sonnet',
            'anthropic/claude-3.5-sonnet',
            'anthropic/claude-3.5-sonnet',
            'anthropic/claude-3.5-sonnet',
          ],
        },
      ],
      responses: [
        {
          model: 'anthropic/claude-3.5-sonnet',
          completion: {
            files: {
              'index.js': {
                content:
                  "const canvas = document.getElementById('waveform');\nconst ctx = canvas.getContext('2d');\nconst frequencySlider = document.getElementById('frequencySlider');\nconst playPauseBtn = document.getElementById('playPauseBtn');\n\nlet frequency = 440;\nlet isPlaying = false;\nlet audioContext;\nlet oscillator;\nlet animationId;\n\nfrequencySlider.addEventListener('input', () =\u003e {\n    frequency = parseFloat(frequencySlider.value);\n    if (isPlaying) {\n        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);\n    }\n});\n\nplayPauseBtn.addEventListener('click', () =\u003e {\n    if (isPlaying) {\n        stopSound();\n        playPauseBtn.textContent = 'Play';\n    } else {\n        startSound();\n        playPauseBtn.textContent = 'Pause';\n    }\n    isPlaying = !isPlaying;\n});\n\nfunction startSound() {\n    audioContext = new (window.AudioContext || window.webkitAudioContext)();\n    oscillator = audioContext.createOscillator();\n    oscillator.type = 'sine';\n    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);\n    oscillator.connect(audioContext.destination);\n    oscillator.start();\n    animate();\n}\n\nfunction stopSound() {\n    if (oscillator) {\n        oscillator.stop();\n        oscillator.disconnect();\n    }\n    if (audioContext) {\n        audioContext.close();\n    }\n    cancelAnimationFrame(animationId);\n}\n\nfunction drawWave(time) {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    ctx.beginPath();\n    ctx.moveTo(0, canvas.height / 2);\n\n    for (let x = 0; x \u003c canvas.width; x++) {\n        const y = Math.sin((x / canvas.width) * Math.PI * 2 * (canvas.width / (1000 / frequency)) + time) * 50 + canvas.height / 2;\n        ctx.lineTo(x, y);\n    }\n\n    ctx.strokeStyle = '#e94560';\n    ctx.lineWidth = 2;\n    ctx.stroke();\n}\n\nfunction animate(time) {\n    drawWave(time / 200);\n    animationId = requestAnimationFrame(animate);\n}\n\ndrawWave(0);",
              },
              'index.html': {
                content:
                  '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003eSound Wave Frequency Visualizer\u003c/title\u003e\n    \u003cstyle\u003e\n        body {\n            font-family: Arial, sans-serif;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n            height: 100vh;\n            margin: 0;\n            background-color: #1a1a2e;\n            color: #ffffff;\n        }\n        canvas {\n            border: 1px solid #ffffff;\n            background-color: #16213e;\n        }\n        .controls {\n            margin-top: 20px;\n            display: flex;\n            align-items: center;\n        }\n        input[type="range"] {\n            width: 200px;\n            margin: 0 10px;\n        }\n        button {\n            padding: 10px 20px;\n            font-size: 16px;\n            background-color: #0f3460;\n            color: #ffffff;\n            border: none;\n            border-radius: 5px;\n            cursor: pointer;\n            transition: background-color 0.3s;\n        }\n        button:hover {\n            background-color: #16213e;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003ccanvas id="waveform" width="800" height="200"\u003e\u003c/canvas\u003e\n    \u003cdiv class="controls"\u003e\n        \u003cspan\u003e20 Hz\u003c/span\u003e\n        \u003cinput type="range" id="frequencySlider" min="20" max="2000" value="440"\u003e\n        \u003cspan\u003e2000 Hz\u003c/span\u003e\n        \u003cbutton id="playPauseBtn"\u003ePlay\u003c/button\u003e\n    \u003c/div\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
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
            sandbox_url: 'https://rgqf3d.csb.app/',
            combined_html:
              '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003eSound Wave Frequency Visualizer\u003c/title\u003e\n    \u003cstyle\u003e\n        body {\n            font-family: Arial, sans-serif;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n            height: 100vh;\n            margin: 0;\n            background-color: #1a1a2e;\n            color: #ffffff;\n        }\n        canvas {\n            border: 1px solid #ffffff;\n            background-color: #16213e;\n        }\n        .controls {\n            margin-top: 20px;\n            display: flex;\n            align-items: center;\n        }\n        input[type="range"] {\n            width: 200px;\n            margin: 0 10px;\n        }\n        button {\n            padding: 10px 20px;\n            font-size: 16px;\n            background-color: #0f3460;\n            color: #ffffff;\n            border: none;\n            border-radius: 5px;\n            cursor: pointer;\n            transition: background-color 0.3s;\n        }\n        button:hover {\n            background-color: #16213e;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003ccanvas id="waveform" width="800" height="200"\u003e\u003c/canvas\u003e\n    \u003cdiv class="controls"\u003e\n        \u003cspan\u003e20 Hz\u003c/span\u003e\n        \u003cinput type="range" id="frequencySlider" min="20" max="2000" value="440"\u003e\n        \u003cspan\u003e2000 Hz\u003c/span\u003e\n        \u003cbutton id="playPauseBtn"\u003ePlay\u003c/button\u003e\n    \u003c/div\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003cscript\u003econst canvas = document.getElementById(\'waveform\');\nconst ctx = canvas.getContext(\'2d\');\nconst frequencySlider = document.getElementById(\'frequencySlider\');\nconst playPauseBtn = document.getElementById(\'playPauseBtn\');\n\nlet frequency = 440;\nlet isPlaying = false;\nlet audioContext;\nlet oscillator;\nlet animationId;\n\nfrequencySlider.addEventListener(\'input\', () =\u003e {\n    frequency = parseFloat(frequencySlider.value);\n    if (isPlaying) {\n        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);\n    }\n});\n\nplayPauseBtn.addEventListener(\'click\', () =\u003e {\n    if (isPlaying) {\n        stopSound();\n        playPauseBtn.textContent = \'Play\';\n    } else {\n        startSound();\n        playPauseBtn.textContent = \'Pause\';\n    }\n    isPlaying = !isPlaying;\n});\n\nfunction startSound() {\n    audioContext = new (window.AudioContext || window.webkitAudioContext)();\n    oscillator = audioContext.createOscillator();\n    oscillator.type = \'sine\';\n    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);\n    oscillator.connect(audioContext.destination);\n    oscillator.start();\n    animate();\n}\n\nfunction stopSound() {\n    if (oscillator) {\n        oscillator.stop();\n        oscillator.disconnect();\n    }\n    if (audioContext) {\n        audioContext.close();\n    }\n    cancelAnimationFrame(animationId);\n}\n\nfunction drawWave(time) {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    ctx.beginPath();\n    ctx.moveTo(0, canvas.height / 2);\n\n    for (let x = 0; x \u003c canvas.width; x++) {\n        const y = Math.sin((x / canvas.width) * Math.PI * 2 * (canvas.width / (1000 / frequency)) + time) * 50 + canvas.height / 2;\n        ctx.lineTo(x, y);\n    }\n\n    ctx.strokeStyle = \'#e94560\';\n    ctx.lineWidth = 2;\n    ctx.stroke();\n}\n\nfunction animate(time) {\n    drawWave(time / 200);\n    animationId = requestAnimationFrame(animate);\n}\n\ndrawWave(0);\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e',
            additional_notes:
              'This implementation creates an interactive sound wave frequency visualizer using HTML5 Canvas and Web Audio API. The user can adjust the frequency using a slider, and play/pause the sound with a button. The waveform animates in real-time based on the selected frequency. No additional installation is required as it uses only built-in browser APIs.',
            installation_commands: '',
          },
        },
        {
          model: 'anthropic/claude-3.5-sonnet',
          completion: {
            files: {
              'index.js': {
                content:
                  "const canvas = document.getElementById('waveCanvas');\nconst ctx = canvas.getContext('2d');\nconst frequencySlider = document.getElementById('frequencySlider');\nconst frequencyValue = document.getElementById('frequencyValue');\n\nlet frequency = 50;\nlet amplitude = 50;\nlet phase = 0;\n\nfunction drawWave() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    ctx.beginPath();\n    ctx.moveTo(0, canvas.height / 2);\n\n    for (let x = 0; x \u003c canvas.width; x++) {\n        const y = amplitude * Math.sin((x / canvas.width) * Math.PI * 2 * frequency + phase) + canvas.height / 2;\n        ctx.lineTo(x, y);\n    }\n\n    ctx.strokeStyle = '#00ffff';\n    ctx.lineWidth = 2;\n    ctx.stroke();\n}\n\nfunction animate() {\n    phase += 0.1;\n    drawWave();\n    requestAnimationFrame(animate);\n}\n\nfrequencySlider.addEventListener('input', (e) =\u003e {\n    frequency = parseInt(e.target.value);\n    frequencyValue.textContent = `Frequency: ${frequency} Hz`;\n});\n\nanimate();",
              },
              'index.html': {
                content:
                  '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003eSound Wave Frequency Visualizer\u003c/title\u003e\n    \u003cstyle\u003e\n        body {\n            font-family: Arial, sans-serif;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n            height: 100vh;\n            margin: 0;\n            background-color: #1a1a2e;\n            color: #ffffff;\n        }\n        canvas {\n            border: 1px solid #ffffff;\n            background-color: #16213e;\n        }\n        #frequencySlider {\n            width: 300px;\n            margin: 20px 0;\n        }\n        #frequencyValue {\n            margin-bottom: 20px;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003ch1\u003eSound Wave Frequency Visualizer\u003c/h1\u003e\n    \u003ccanvas id="waveCanvas" width="600" height="300"\u003e\u003c/canvas\u003e\n    \u003cinput type="range" id="frequencySlider" min="1" max="100" value="50"\u003e\n    \u003cdiv id="frequencyValue"\u003eFrequency: 50 Hz\u003c/div\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
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
            sandbox_url: 'https://gq3t55.csb.app/',
            combined_html:
              '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003eSound Wave Frequency Visualizer\u003c/title\u003e\n    \u003cstyle\u003e\n        body {\n            font-family: Arial, sans-serif;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n            height: 100vh;\n            margin: 0;\n            background-color: #1a1a2e;\n            color: #ffffff;\n        }\n        canvas {\n            border: 1px solid #ffffff;\n            background-color: #16213e;\n        }\n        #frequencySlider {\n            width: 300px;\n            margin: 20px 0;\n        }\n        #frequencyValue {\n            margin-bottom: 20px;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003ch1\u003eSound Wave Frequency Visualizer\u003c/h1\u003e\n    \u003ccanvas id="waveCanvas" width="600" height="300"\u003e\u003c/canvas\u003e\n    \u003cinput type="range" id="frequencySlider" min="1" max="100" value="50"\u003e\n    \u003cdiv id="frequencyValue"\u003eFrequency: 50 Hz\u003c/div\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003cscript\u003econst canvas = document.getElementById(\'waveCanvas\');\nconst ctx = canvas.getContext(\'2d\');\nconst frequencySlider = document.getElementById(\'frequencySlider\');\nconst frequencyValue = document.getElementById(\'frequencyValue\');\n\nlet frequency = 50;\nlet amplitude = 50;\nlet phase = 0;\n\nfunction drawWave() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    ctx.beginPath();\n    ctx.moveTo(0, canvas.height / 2);\n\n    for (let x = 0; x \u003c canvas.width; x++) {\n        const y = amplitude * Math.sin((x / canvas.width) * Math.PI * 2 * frequency + phase) + canvas.height / 2;\n        ctx.lineTo(x, y);\n    }\n\n    ctx.strokeStyle = \'#00ffff\';\n    ctx.lineWidth = 2;\n    ctx.stroke();\n}\n\nfunction animate() {\n    phase += 0.1;\n    drawWave();\n    requestAnimationFrame(animate);\n}\n\nfrequencySlider.addEventListener(\'input\', (e) =\u003e {\n    frequency = parseInt(e.target.value);\n    frequencyValue.textContent = `Frequency: ${frequency} Hz`;\n});\n\nanimate();\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e',
            additional_notes:
              'This implementation creates an interactive sound wave frequency visualizer using HTML5 Canvas and JavaScript. The user can adjust the frequency using a slider, and the waveform updates in real-time. The visualization is visually appealing with a dark background and a cyan waveform. No additional installation is required as it uses only built-in browser features.',
            installation_commands: '',
          },
        },
        {
          model: 'anthropic/claude-3.5-sonnet',
          completion: {
            files: {
              'index.js': {
                content:
                  "const visualizer = document.getElementById('visualizer');\nconst colorPicker = document.getElementById('colorPicker');\nconst frequencySlider = document.getElementById('frequencySlider');\nconst micToggle = document.getElementById('micToggle');\n\nlet audioContext;\nlet analyser;\nlet microphone;\nlet isUsingMic = false;\n\nfunction updateVisualization(frequency) {\n    const minSize = 100;\n    const maxSize = 300;\n    const minFreq = 20;\n    const maxFreq = 20000;\n    const logFreq = Math.log(frequency);\n    const logMinFreq = Math.log(minFreq);\n    const logMaxFreq = Math.log(maxFreq);\n    const size = minSize + (maxSize - minSize) * (logFreq - logMinFreq) / (logMaxFreq - logMinFreq);\n    \n    visualizer.style.width = `${size}px`;\n    visualizer.style.height = `${size}px`;\n    visualizer.style.backgroundColor = colorPicker.value;\n}\n\nfunction handleFrequencyChange() {\n    if (!isUsingMic) {\n        updateVisualization(frequencySlider.value);\n    }\n}\n\nfunction handleColorChange() {\n    visualizer.style.backgroundColor = colorPicker.value;\n}\n\nasync function toggleMicrophone() {\n    if (!audioContext) {\n        audioContext = new (window.AudioContext || window.webkitAudioContext)();\n        analyser = audioContext.createAnalyser();\n        analyser.fftSize = 2048;\n    }\n\n    if (!isUsingMic) {\n        try {\n            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });\n            microphone = audioContext.createMediaStreamSource(stream);\n            microphone.connect(analyser);\n            isUsingMic = true;\n            micToggle.textContent = 'Use Slider';\n            frequencySlider.disabled = true;\n            updateMicVisualization();\n        } catch (error) {\n            console.error('Error accessing microphone:', error);\n            alert('Unable to access microphone. Please check your permissions.');\n        }\n    } else {\n        if (microphone) {\n            microphone.disconnect();\n        }\n        isUsingMic = false;\n        micToggle.textContent = 'Use Microphone';\n        frequencySlider.disabled = false;\n        handleFrequencyChange();\n    }\n}\n\nfunction updateMicVisualization() {\n    if (!isUsingMic) return;\n\n    const dataArray = new Uint8Array(analyser.frequencyBinCount);\n    analyser.getByteFrequencyData(dataArray);\n\n    const sum = dataArray.reduce((a, b) =\u003e a + b, 0);\n    const avg = sum / dataArray.length;\n    const frequency = avg * (audioContext.sampleRate / 2) / 255;\n\n    updateVisualization(frequency);\n    requestAnimationFrame(updateMicVisualization);\n}\n\nfrequencySlider.addEventListener('input', handleFrequencyChange);\ncolorPicker.addEventListener('input', handleColorChange);\nmicToggle.addEventListener('click', toggleMicrophone);\n\n// Initial update\nhandleFrequencyChange();\nhandleColorChange();",
              },
              'index.html': {
                content:
                  '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003eSound Wave Frequency Visualizer\u003c/title\u003e\n    \u003cstyle\u003e\n        body {\n            font-family: Arial, sans-serif;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 100vh;\n            margin: 0;\n            background-color: #f0f0f0;\n        }\n        .container {\n            text-align: center;\n        }\n        #visualizer {\n            width: 300px;\n            height: 300px;\n            border-radius: 50%;\n            margin: 20px auto;\n            transition: all 0.1s ease;\n        }\n        #colorPicker {\n            margin: 10px;\n        }\n        #frequencySlider {\n            width: 300px;\n        }\n        #micToggle {\n            margin: 10px;\n            padding: 10px;\n            background-color: #4CAF50;\n            color: white;\n            border: none;\n            border-radius: 5px;\n            cursor: pointer;\n        }\n        #micToggle:hover {\n            background-color: #45a049;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv class="container"\u003e\n        \u003cdiv id="visualizer"\u003e\u003c/div\u003e\n        \u003cinput type="color" id="colorPicker" value="#00ff00"\u003e\n        \u003cinput type="range" id="frequencySlider" min="20" max="20000" value="440"\u003e\n        \u003cbutton id="micToggle"\u003eUse Microphone\u003c/button\u003e\n    \u003c/div\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
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
            sandbox_url: 'https://64cn2g.csb.app/',
            combined_html:
              '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003eSound Wave Frequency Visualizer\u003c/title\u003e\n    \u003cstyle\u003e\n        body {\n            font-family: Arial, sans-serif;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 100vh;\n            margin: 0;\n            background-color: #f0f0f0;\n        }\n        .container {\n            text-align: center;\n        }\n        #visualizer {\n            width: 300px;\n            height: 300px;\n            border-radius: 50%;\n            margin: 20px auto;\n            transition: all 0.1s ease;\n        }\n        #colorPicker {\n            margin: 10px;\n        }\n        #frequencySlider {\n            width: 300px;\n        }\n        #micToggle {\n            margin: 10px;\n            padding: 10px;\n            background-color: #4CAF50;\n            color: white;\n            border: none;\n            border-radius: 5px;\n            cursor: pointer;\n        }\n        #micToggle:hover {\n            background-color: #45a049;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv class="container"\u003e\n        \u003cdiv id="visualizer"\u003e\u003c/div\u003e\n        \u003cinput type="color" id="colorPicker" value="#00ff00"\u003e\n        \u003cinput type="range" id="frequencySlider" min="20" max="20000" value="440"\u003e\n        \u003cbutton id="micToggle"\u003eUse Microphone\u003c/button\u003e\n    \u003c/div\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003cscript\u003econst visualizer = document.getElementById(\'visualizer\');\nconst colorPicker = document.getElementById(\'colorPicker\');\nconst frequencySlider = document.getElementById(\'frequencySlider\');\nconst micToggle = document.getElementById(\'micToggle\');\n\nlet audioContext;\nlet analyser;\nlet microphone;\nlet isUsingMic = false;\n\nfunction updateVisualization(frequency) {\n    const minSize = 100;\n    const maxSize = 300;\n    const minFreq = 20;\n    const maxFreq = 20000;\n    const logFreq = Math.log(frequency);\n    const logMinFreq = Math.log(minFreq);\n    const logMaxFreq = Math.log(maxFreq);\n    const size = minSize + (maxSize - minSize) * (logFreq - logMinFreq) / (logMaxFreq - logMinFreq);\n    \n    visualizer.style.width = `${size}px`;\n    visualizer.style.height = `${size}px`;\n    visualizer.style.backgroundColor = colorPicker.value;\n}\n\nfunction handleFrequencyChange() {\n    if (!isUsingMic) {\n        updateVisualization(frequencySlider.value);\n    }\n}\n\nfunction handleColorChange() {\n    visualizer.style.backgroundColor = colorPicker.value;\n}\n\nasync function toggleMicrophone() {\n    if (!audioContext) {\n        audioContext = new (window.AudioContext || window.webkitAudioContext)();\n        analyser = audioContext.createAnalyser();\n        analyser.fftSize = 2048;\n    }\n\n    if (!isUsingMic) {\n        try {\n            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });\n            microphone = audioContext.createMediaStreamSource(stream);\n            microphone.connect(analyser);\n            isUsingMic = true;\n            micToggle.textContent = \'Use Slider\';\n            frequencySlider.disabled = true;\n            updateMicVisualization();\n        } catch (error) {\n            console.error(\'Error accessing microphone:\', error);\n            alert(\'Unable to access microphone. Please check your permissions.\');\n        }\n    } else {\n        if (microphone) {\n            microphone.disconnect();\n        }\n        isUsingMic = false;\n        micToggle.textContent = \'Use Microphone\';\n        frequencySlider.disabled = false;\n        handleFrequencyChange();\n    }\n}\n\nfunction updateMicVisualization() {\n    if (!isUsingMic) return;\n\n    const dataArray = new Uint8Array(analyser.frequencyBinCount);\n    analyser.getByteFrequencyData(dataArray);\n\n    const sum = dataArray.reduce((a, b) =\u003e a + b, 0);\n    const avg = sum / dataArray.length;\n    const frequency = avg * (audioContext.sampleRate / 2) / 255;\n\n    updateVisualization(frequency);\n    requestAnimationFrame(updateMicVisualization);\n}\n\nfrequencySlider.addEventListener(\'input\', handleFrequencyChange);\ncolorPicker.addEventListener(\'input\', handleColorChange);\nmicToggle.addEventListener(\'click\', toggleMicrophone);\n\n// Initial update\nhandleFrequencyChange();\nhandleColorChange();\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e',
            additional_notes:
              "This solution doesn't require any additional installation commands as it uses only built-in JavaScript libraries and functions. To run the visualization, simply open the index.html file in a web browser that supports the Web Audio API (most modern browsers do). The user can interact with the color picker to change the visualization color, use the slider to manually adjust the frequency when not using the microphone, and toggle between microphone input and manual frequency control using the button provided.",
            installation_commands: '',
          },
        },
        {
          model: 'anthropic/claude-3.5-sonnet',
          completion: {
            files: {
              'index.js': {
                content:
                  "const pendulum = document.getElementById('pendulum');\nconst lengthSlider = document.getElementById('length-slider');\nconst startStopButton = document.getElementById('start-stop');\nconst periodDisplay = document.getElementById('period-display');\n\nlet length = 200;\nlet angle = Math.PI / 4;\nlet angleVelocity = 0;\nlet isRunning = false;\nlet animationId;\n\nconst g = 9.81;\nconst fps = 60;\nconst dt = 1 / fps;\n\nfunction updatePendulumPosition() {\n    pendulum.style.height = `${length}px`;\n    pendulum.style.transform = `rotate(${angle}rad)`;\n}\n\nfunction calculatePeriod() {\n    const period = 2 * Math.PI * Math.sqrt(length / 1000 / g);\n    periodDisplay.textContent = `Period: ${period.toFixed(2)} s`;\n}\n\nfunction animate() {\n    const angleAcceleration = -g / (length / 1000) * Math.sin(angle);\n    angleVelocity += angleAcceleration * dt;\n    angle += angleVelocity * dt;\n\n    updatePendulumPosition();\n    animationId = requestAnimationFrame(animate);\n}\n\nlengthSlider.addEventListener('input', () =\u003e {\n    length = parseInt(lengthSlider.value);\n    updatePendulumPosition();\n    calculatePeriod();\n});\n\nstartStopButton.addEventListener('click', () =\u003e {\n    if (isRunning) {\n        cancelAnimationFrame(animationId);\n        startStopButton.textContent = 'Start';\n    } else {\n        animate();\n        startStopButton.textContent = 'Stop';\n    }\n    isRunning = !isRunning;\n});\n\nupdatePendulumPosition();\ncalculatePeriod();\n",
              },
              'index.html': {
                content:
                  '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003ePendulum Motion Simulator\u003c/title\u003e\n    \u003cstyle\u003e\n        body {\n            font-family: Arial, sans-serif;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 100vh;\n            margin: 0;\n            background-color: #f0f0f0;\n        }\n        .container {\n            text-align: center;\n        }\n        #pendulum-container {\n            width: 300px;\n            height: 400px;\n            background-color: #e0e0e0;\n            position: relative;\n            margin: 20px auto;\n            border-radius: 10px;\n            box-shadow: 0 0 10px rgba(0,0,0,0.1);\n        }\n        #pendulum {\n            position: absolute;\n            top: 0;\n            left: 50%;\n            width: 2px;\n            background-color: #333;\n            transform-origin: top center;\n        }\n        #bob {\n            width: 20px;\n            height: 20px;\n            background-color: #4a4a4a;\n            border-radius: 50%;\n            position: absolute;\n            bottom: -10px;\n            left: -9px;\n        }\n        .controls {\n            margin-top: 20px;\n        }\n        #length-slider {\n            width: 200px;\n        }\n        #start-stop {\n            margin-top: 10px;\n            padding: 5px 10px;\n            background-color: #4CAF50;\n            color: white;\n            border: none;\n            border-radius: 4px;\n            cursor: pointer;\n        }\n        #start-stop:hover {\n            background-color: #45a049;\n        }\n        #period-display {\n            margin-top: 10px;\n            font-weight: bold;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv class="container"\u003e\n        \u003ch1\u003ePendulum Motion Simulator\u003c/h1\u003e\n        \u003cdiv id="pendulum-container"\u003e\n            \u003cdiv id="pendulum"\u003e\n                \u003cdiv id="bob"\u003e\u003c/div\u003e\n            \u003c/div\u003e\n        \u003c/div\u003e\n        \u003cdiv class="controls"\u003e\n            \u003clabel for="length-slider"\u003ePendulum Length:\u003c/label\u003e\n            \u003cinput type="range" id="length-slider" min="50" max="300" value="200"\u003e\n            \u003cbr\u003e\n            \u003cbutton id="start-stop"\u003eStart\u003c/button\u003e\n            \u003cdiv id="period-display"\u003ePeriod: 0.00 s\u003c/div\u003e\n        \u003c/div\u003e\n    \u003c/div\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
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
            sandbox_url: 'https://765q3n.csb.app/',
            combined_html:
              '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003ePendulum Motion Simulator\u003c/title\u003e\n    \u003cstyle\u003e\n        body {\n            font-family: Arial, sans-serif;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 100vh;\n            margin: 0;\n            background-color: #f0f0f0;\n        }\n        .container {\n            text-align: center;\n        }\n        #pendulum-container {\n            width: 300px;\n            height: 400px;\n            background-color: #e0e0e0;\n            position: relative;\n            margin: 20px auto;\n            border-radius: 10px;\n            box-shadow: 0 0 10px rgba(0,0,0,0.1);\n        }\n        #pendulum {\n            position: absolute;\n            top: 0;\n            left: 50%;\n            width: 2px;\n            background-color: #333;\n            transform-origin: top center;\n        }\n        #bob {\n            width: 20px;\n            height: 20px;\n            background-color: #4a4a4a;\n            border-radius: 50%;\n            position: absolute;\n            bottom: -10px;\n            left: -9px;\n        }\n        .controls {\n            margin-top: 20px;\n        }\n        #length-slider {\n            width: 200px;\n        }\n        #start-stop {\n            margin-top: 10px;\n            padding: 5px 10px;\n            background-color: #4CAF50;\n            color: white;\n            border: none;\n            border-radius: 4px;\n            cursor: pointer;\n        }\n        #start-stop:hover {\n            background-color: #45a049;\n        }\n        #period-display {\n            margin-top: 10px;\n            font-weight: bold;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv class="container"\u003e\n        \u003ch1\u003ePendulum Motion Simulator\u003c/h1\u003e\n        \u003cdiv id="pendulum-container"\u003e\n            \u003cdiv id="pendulum"\u003e\n                \u003cdiv id="bob"\u003e\u003c/div\u003e\n            \u003c/div\u003e\n        \u003c/div\u003e\n        \u003cdiv class="controls"\u003e\n            \u003clabel for="length-slider"\u003ePendulum Length:\u003c/label\u003e\n            \u003cinput type="range" id="length-slider" min="50" max="300" value="200"\u003e\n            \u003cbr\u003e\n            \u003cbutton id="start-stop"\u003eStart\u003c/button\u003e\n            \u003cdiv id="period-display"\u003ePeriod: 0.00 s\u003c/div\u003e\n        \u003c/div\u003e\n    \u003c/div\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003cscript\u003econst pendulum = document.getElementById(\'pendulum\');\nconst lengthSlider = document.getElementById(\'length-slider\');\nconst startStopButton = document.getElementById(\'start-stop\');\nconst periodDisplay = document.getElementById(\'period-display\');\n\nlet length = 200;\nlet angle = Math.PI / 4;\nlet angleVelocity = 0;\nlet isRunning = false;\nlet animationId;\n\nconst g = 9.81;\nconst fps = 60;\nconst dt = 1 / fps;\n\nfunction updatePendulumPosition() {\n    pendulum.style.height = `${length}px`;\n    pendulum.style.transform = `rotate(${angle}rad)`;\n}\n\nfunction calculatePeriod() {\n    const period = 2 * Math.PI * Math.sqrt(length / 1000 / g);\n    periodDisplay.textContent = `Period: ${period.toFixed(2)} s`;\n}\n\nfunction animate() {\n    const angleAcceleration = -g / (length / 1000) * Math.sin(angle);\n    angleVelocity += angleAcceleration * dt;\n    angle += angleVelocity * dt;\n\n    updatePendulumPosition();\n    animationId = requestAnimationFrame(animate);\n}\n\nlengthSlider.addEventListener(\'input\', () =\u003e {\n    length = parseInt(lengthSlider.value);\n    updatePendulumPosition();\n    calculatePeriod();\n});\n\nstartStopButton.addEventListener(\'click\', () =\u003e {\n    if (isRunning) {\n        cancelAnimationFrame(animationId);\n        startStopButton.textContent = \'Start\';\n    } else {\n        animate();\n        startStopButton.textContent = \'Stop\';\n    }\n    isRunning = !isRunning;\n});\n\nupdatePendulumPosition();\ncalculatePeriod();\n\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e',
            additional_notes:
              'This solution implements an interactive pendulum motion simulator using HTML, CSS, and JavaScript. It includes a dynamic animation of a pendulum, a slider to adjust the pendulum length, a start/stop button, and a display showing the current period of oscillation. The visualization is visually appealing with a clean interface and smooth animations. No additional installation commands are required as it uses only built-in JavaScript libraries and functions.',
            installation_commands: '',
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
    title: 'LLM Code Generation Task',
    body: "Create a Brownian Motion Visualizer using JavaScript, HTML, and CSS. The visualization should display a single particle moving randomly on a 2D canvas. Requirements:\n\n1. The particle's movement should be controlled by the user's mouse position. As the user moves their mouse closer to the edges of the canvas, the particle's random movement should become more erratic and faster.\n\n2. Implement a slider that allows the user to adjust the 'temperature' of the system. Higher temperatures should result in more energetic and rapid particle movement, while lower temperatures should slow down the particle's motion.\n\nEnsure the visualization is smooth and responsive to user interactions. Use only built-in JavaScript libraries and features.\nNote:\n- The visualization should be implemented in JavaScript with HTML and CSS.\n- Ensure that the output has both index.js and index.html files\n",
    expireAt: '2099-09-03T07:50:56Z',
    type: 'CODE_GENERATION',
    taskData: {
      task: 'CODE_GENERATION',
      prompt:
        "Create a Brownian Motion Visualizer using JavaScript, HTML, and CSS. The visualization should display a single particle moving randomly on a 2D canvas. Requirements:\n\n1. The particle's movement should be controlled by the user's mouse position. As the user moves their mouse closer to the edges of the canvas, the particle's random movement should become more erratic and faster.\n\n2. Implement a slider that allows the user to adjust the 'temperature' of the system. Higher temperatures should result in more energetic and rapid particle movement, while lower temperatures should slow down the particle's motion.\n\nEnsure the visualization is smooth and responsive to user interactions. Use only built-in JavaScript libraries and features.\nNote:\n- The visualization should be implemented in JavaScript with HTML and CSS.\n- Ensure that the output has both index.js and index.html files\n",
      criteria: [
        {
          max: 100,
          min: 1,
          type: 'multi-score',
          options: [
            'anthropic/claude-3.5-sonnet',
            'anthropic/claude-3.5-sonnet',
            'anthropic/claude-3.5-sonnet',
            'anthropic/claude-3.5-sonnet',
          ],
        },
      ],
      responses: [
        {
          model: 'anthropic/claude-3.5-sonnet',
          completion: {
            files: {
              'index.js': {
                content:
                  "const canvas = document.getElementById('canvas');\nconst ctx = canvas.getContext('2d');\nconst temperatureSlider = document.getElementById('temperatureSlider');\nconst temperatureValue = document.getElementById('temperatureValue');\n\ncanvas.width = 800;\ncanvas.height = 600;\n\nlet particle = {\n    x: canvas.width / 2,\n    y: canvas.height / 2,\n    radius: 5,\n    color: '#16a085'\n};\n\nlet mouseX = 0;\nlet mouseY = 0;\nlet temperature = 50;\n\nfunction drawParticle() {\n    ctx.beginPath();\n    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);\n    ctx.fillStyle = particle.color;\n    ctx.fill();\n    ctx.closePath();\n}\n\nfunction drawBackground() {\n    ctx.fillStyle = 'rgba(26, 26, 46, 0.2)';\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\n\n    // Draw stars\n    for (let i = 0; i \u003c 50; i++) {\n        ctx.beginPath();\n        ctx.arc(\n            Math.random() * canvas.width,\n            Math.random() * canvas.height,\n            Math.random() * 2,\n            0,\n            Math.PI * 2\n        );\n        ctx.fillStyle = 'rgba(255, 255, 255, ' + Math.random() + ')';\n        ctx.fill();\n    }\n}\n\nfunction updateParticle() {\n    const dx = (mouseX - particle.x) / canvas.width;\n    const dy = (mouseY - particle.y) / canvas.height;\n    const distanceFactor = Math.sqrt(dx * dx + dy * dy);\n    const velocityFactor = (1 - distanceFactor) * (temperature / 50);\n\n    particle.x += (Math.random() - 0.5) * velocityFactor * 10;\n    particle.y += (Math.random() - 0.5) * velocityFactor * 10;\n\n    // Keep particle within canvas bounds\n    particle.x = Math.max(particle.radius, Math.min(canvas.width - particle.radius, particle.x));\n    particle.y = Math.max(particle.radius, Math.min(canvas.height - particle.radius, particle.y));\n}\n\nfunction animate() {\n    drawBackground();\n    updateParticle();\n    drawParticle();\n    requestAnimationFrame(animate);\n}\n\ncanvas.addEventListener('mousemove', (event) =\u003e {\n    const rect = canvas.getBoundingClientRect();\n    mouseX = event.clientX - rect.left;\n    mouseY = event.clientY - rect.top;\n});\n\ntemperatureSlider.addEventListener('input', (event) =\u003e {\n    temperature = event.target.value;\n    temperatureValue.textContent = temperature;\n});\n\nanimate();",
              },
              'index.html': {
                content:
                  '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003eBrownian Motion Visualizer\u003c/title\u003e\n    \u003cstyle\u003e\n        body {\n            margin: 0;\n            padding: 0;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 100vh;\n            background-color: #1a1a2e;\n            font-family: Arial, sans-serif;\n        }\n        #canvas {\n            border: 2px solid #e94560;\n        }\n        #controls {\n            position: absolute;\n            bottom: 20px;\n            display: flex;\n            align-items: center;\n            color: #ffffff;\n        }\n        #temperatureSlider {\n            margin: 0 10px;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003ccanvas id="canvas"\u003e\u003c/canvas\u003e\n    \u003cdiv id="controls"\u003e\n        \u003clabel for="temperatureSlider"\u003eTemperature:\u003c/label\u003e\n        \u003cinput type="range" id="temperatureSlider" min="1" max="100" value="50"\u003e\n        \u003cspan id="temperatureValue"\u003e50\u003c/span\u003e\n    \u003c/div\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
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
            sandbox_url: 'https://3mqzrk.csb.app/',
            combined_html:
              '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003eBrownian Motion Visualizer\u003c/title\u003e\n    \u003cstyle\u003e\n        body {\n            margin: 0;\n            padding: 0;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 100vh;\n            background-color: #1a1a2e;\n            font-family: Arial, sans-serif;\n        }\n        #canvas {\n            border: 2px solid #e94560;\n        }\n        #controls {\n            position: absolute;\n            bottom: 20px;\n            display: flex;\n            align-items: center;\n            color: #ffffff;\n        }\n        #temperatureSlider {\n            margin: 0 10px;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003ccanvas id="canvas"\u003e\u003c/canvas\u003e\n    \u003cdiv id="controls"\u003e\n        \u003clabel for="temperatureSlider"\u003eTemperature:\u003c/label\u003e\n        \u003cinput type="range" id="temperatureSlider" min="1" max="100" value="50"\u003e\n        \u003cspan id="temperatureValue"\u003e50\u003c/span\u003e\n    \u003c/div\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003cscript\u003econst canvas = document.getElementById(\'canvas\');\nconst ctx = canvas.getContext(\'2d\');\nconst temperatureSlider = document.getElementById(\'temperatureSlider\');\nconst temperatureValue = document.getElementById(\'temperatureValue\');\n\ncanvas.width = 800;\ncanvas.height = 600;\n\nlet particle = {\n    x: canvas.width / 2,\n    y: canvas.height / 2,\n    radius: 5,\n    color: \'#16a085\'\n};\n\nlet mouseX = 0;\nlet mouseY = 0;\nlet temperature = 50;\n\nfunction drawParticle() {\n    ctx.beginPath();\n    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);\n    ctx.fillStyle = particle.color;\n    ctx.fill();\n    ctx.closePath();\n}\n\nfunction drawBackground() {\n    ctx.fillStyle = \'rgba(26, 26, 46, 0.2)\';\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\n\n    // Draw stars\n    for (let i = 0; i \u003c 50; i++) {\n        ctx.beginPath();\n        ctx.arc(\n            Math.random() * canvas.width,\n            Math.random() * canvas.height,\n            Math.random() * 2,\n            0,\n            Math.PI * 2\n        );\n        ctx.fillStyle = \'rgba(255, 255, 255, \' + Math.random() + \')\';\n        ctx.fill();\n    }\n}\n\nfunction updateParticle() {\n    const dx = (mouseX - particle.x) / canvas.width;\n    const dy = (mouseY - particle.y) / canvas.height;\n    const distanceFactor = Math.sqrt(dx * dx + dy * dy);\n    const velocityFactor = (1 - distanceFactor) * (temperature / 50);\n\n    particle.x += (Math.random() - 0.5) * velocityFactor * 10;\n    particle.y += (Math.random() - 0.5) * velocityFactor * 10;\n\n    // Keep particle within canvas bounds\n    particle.x = Math.max(particle.radius, Math.min(canvas.width - particle.radius, particle.x));\n    particle.y = Math.max(particle.radius, Math.min(canvas.height - particle.radius, particle.y));\n}\n\nfunction animate() {\n    drawBackground();\n    updateParticle();\n    drawParticle();\n    requestAnimationFrame(animate);\n}\n\ncanvas.addEventListener(\'mousemove\', (event) =\u003e {\n    const rect = canvas.getBoundingClientRect();\n    mouseX = event.clientX - rect.left;\n    mouseY = event.clientY - rect.top;\n});\n\ntemperatureSlider.addEventListener(\'input\', (event) =\u003e {\n    temperature = event.target.value;\n    temperatureValue.textContent = temperature;\n});\n\nanimate();\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e',
            additional_notes:
              "This solution implements a Brownian Motion Visualizer using HTML5 Canvas and JavaScript. The particle's movement is influenced by the mouse position and a temperature slider. The background includes a starry night effect for improved aesthetics. No additional installation is required as it uses only built-in browser features.",
            installation_commands: '',
          },
        },
        {
          model: 'anthropic/claude-3.5-sonnet',
          completion: {
            files: {
              'index.js': {
                content:
                  "const canvas = document.getElementById('brownianCanvas');\nconst ctx = canvas.getContext('2d');\n\ncanvas.width = 800;\ncanvas.height = 600;\n\nlet particle = {\n    x: canvas.width / 2,\n    y: canvas.height / 2,\n    radius: 5,\n    color: '#16213e'\n};\n\nlet mouse = {\n    x: 0,\n    y: 0\n};\n\nfunction drawParticle() {\n    ctx.beginPath();\n    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);\n    ctx.fillStyle = particle.color;\n    ctx.fill();\n    ctx.closePath();\n}\n\nfunction drawBackground() {\n    ctx.fillStyle = '#0f3460';\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\n\n    // Draw stars\n    for (let i = 0; i \u003c 100; i++) {\n        ctx.beginPath();\n        ctx.arc(\n            Math.random() * canvas.width,\n            Math.random() * canvas.height,\n            Math.random() * 2,\n            0,\n            Math.PI * 2\n        );\n        ctx.fillStyle = 'rgba(255, 255, 255, ' + Math.random() + ')';\n        ctx.fill();\n    }\n\n    // Draw moon\n    ctx.beginPath();\n    ctx.arc(50, 50, 30, 0, Math.PI * 2);\n    ctx.fillStyle = '#e0e0e0';\n    ctx.fill();\n    ctx.closePath();\n}\n\nfunction updateParticle() {\n    const dx = mouse.x - particle.x;\n    const dy = mouse.y - particle.y;\n    const distance = Math.sqrt(dx * dx + dy * dy);\n\n    const maxDistance = Math.sqrt(canvas.width * canvas.width + canvas.height * canvas.height) / 2;\n    const speed = 5 * (1 - distance / maxDistance);\n\n    particle.x += (Math.random() - 0.5) * speed;\n    particle.y += (Math.random() - 0.5) * speed;\n\n    // Keep particle within canvas bounds\n    particle.x = Math.max(particle.radius, Math.min(canvas.width - particle.radius, particle.x));\n    particle.y = Math.max(particle.radius, Math.min(canvas.height - particle.radius, particle.y));\n}\n\nfunction animate() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    drawBackground();\n    updateParticle();\n    drawParticle();\n    requestAnimationFrame(animate);\n}\n\ncanvas.addEventListener('mousemove', (event) =\u003e {\n    const rect = canvas.getBoundingClientRect();\n    mouse.x = event.clientX - rect.left;\n    mouse.y = event.clientY - rect.top;\n});\n\nanimate();",
              },
              'index.html': {
                content:
                  '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003eBrownian Motion Visualizer\u003c/title\u003e\n    \u003cstyle\u003e\n        body {\n            margin: 0;\n            padding: 0;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 100vh;\n            background-color: #1a1a2e;\n        }\n        canvas {\n            border: 2px solid #e94560;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003ccanvas id="brownianCanvas"\u003e\u003c/canvas\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
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
            sandbox_url: 'https://ln3c47.csb.app/',
            combined_html:
              "\u003c!DOCTYPE html\u003e\n\u003chtml lang=\"en\"\u003e\n\u003chead\u003e\n    \u003cmeta charset=\"UTF-8\"\u003e\n    \u003cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003e\n    \u003ctitle\u003eBrownian Motion Visualizer\u003c/title\u003e\n    \u003cstyle\u003e\n        body {\n            margin: 0;\n            padding: 0;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 100vh;\n            background-color: #1a1a2e;\n        }\n        canvas {\n            border: 2px solid #e94560;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003ccanvas id=\"brownianCanvas\"\u003e\u003c/canvas\u003e\n    \u003cscript src=\"index.js\"\u003e\u003c/script\u003e\n\u003cscript\u003econst canvas = document.getElementById('brownianCanvas');\nconst ctx = canvas.getContext('2d');\n\ncanvas.width = 800;\ncanvas.height = 600;\n\nlet particle = {\n    x: canvas.width / 2,\n    y: canvas.height / 2,\n    radius: 5,\n    color: '#16213e'\n};\n\nlet mouse = {\n    x: 0,\n    y: 0\n};\n\nfunction drawParticle() {\n    ctx.beginPath();\n    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);\n    ctx.fillStyle = particle.color;\n    ctx.fill();\n    ctx.closePath();\n}\n\nfunction drawBackground() {\n    ctx.fillStyle = '#0f3460';\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\n\n    // Draw stars\n    for (let i = 0; i \u003c 100; i++) {\n        ctx.beginPath();\n        ctx.arc(\n            Math.random() * canvas.width,\n            Math.random() * canvas.height,\n            Math.random() * 2,\n            0,\n            Math.PI * 2\n        );\n        ctx.fillStyle = 'rgba(255, 255, 255, ' + Math.random() + ')';\n        ctx.fill();\n    }\n\n    // Draw moon\n    ctx.beginPath();\n    ctx.arc(50, 50, 30, 0, Math.PI * 2);\n    ctx.fillStyle = '#e0e0e0';\n    ctx.fill();\n    ctx.closePath();\n}\n\nfunction updateParticle() {\n    const dx = mouse.x - particle.x;\n    const dy = mouse.y - particle.y;\n    const distance = Math.sqrt(dx * dx + dy * dy);\n\n    const maxDistance = Math.sqrt(canvas.width * canvas.width + canvas.height * canvas.height) / 2;\n    const speed = 5 * (1 - distance / maxDistance);\n\n    particle.x += (Math.random() - 0.5) * speed;\n    particle.y += (Math.random() - 0.5) * speed;\n\n    // Keep particle within canvas bounds\n    particle.x = Math.max(particle.radius, Math.min(canvas.width - particle.radius, particle.x));\n    particle.y = Math.max(particle.radius, Math.min(canvas.height - particle.radius, particle.y));\n}\n\nfunction animate() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    drawBackground();\n    updateParticle();\n    drawParticle();\n    requestAnimationFrame(animate);\n}\n\ncanvas.addEventListener('mousemove', (event) =\u003e {\n    const rect = canvas.getBoundingClientRect();\n    mouse.x = event.clientX - rect.left;\n    mouse.y = event.clientY - rect.top;\n});\n\nanimate();\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e",
            additional_notes:
              "This solution creates a Brownian Motion Visualizer using HTML5 Canvas and JavaScript. The particle's movement is influenced by the user's mouse position, becoming more erratic as the mouse approaches the canvas edges. The visualization includes a night sky background with stars and a moon for aesthetic appeal.",
            installation_commands: '',
          },
        },
        {
          model: 'anthropic/claude-3.5-sonnet',
          completion: {
            files: {
              'index.js': {
                content:
                  "const canvas = document.getElementById('brownianCanvas');\nconst ctx = canvas.getContext('2d');\n\ncanvas.width = 800;\ncanvas.height = 600;\n\nconst centerX = canvas.width / 2;\nconst centerY = canvas.height / 2;\n\nclass Particle {\n    constructor() {\n        this.x = centerX;\n        this.y = centerY;\n        this.radius = 5;\n        this.vx = 0;\n        this.vy = 0;\n        this.color = 'hsl(180, 100%, 50%)';\n    }\n\n    update() {\n        // Brownian motion\n        this.vx += (Math.random() - 0.5) * 0.5;\n        this.vy += (Math.random() - 0.5) * 0.5;\n\n        // Gravitational force\n        const dx = centerX - this.x;\n        const dy = centerY - this.y;\n        const distance = Math.sqrt(dx * dx + dy * dy);\n        const force = distance * 0.0001;\n        this.vx += dx * force;\n        this.vy += dy * force;\n\n        // Update position\n        this.x += this.vx;\n        this.y += this.vy;\n\n        // Apply friction\n        this.vx *= 0.99;\n        this.vy *= 0.99;\n\n        // Update color based on velocity\n        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);\n        const hue = Math.min(360, Math.max(180, 180 + speed * 300));\n        this.color = `hsl(${hue}, 100%, 50%)`;\n    }\n\n    draw() {\n        ctx.beginPath();\n        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);\n        ctx.fillStyle = this.color;\n        ctx.fill();\n        ctx.closePath();\n    }\n}\n\nconst particle = new Particle();\n\nfunction drawBackground() {\n    ctx.fillStyle = 'rgba(26, 26, 26, 0.1)';\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\n\n    // Draw stars\n    for (let i = 0; i \u003c 50; i++) {\n        ctx.beginPath();\n        ctx.arc(\n            Math.random() * canvas.width,\n            Math.random() * canvas.height,\n            Math.random() * 1.5,\n            0,\n            Math.PI * 2\n        );\n        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';\n        ctx.fill();\n        ctx.closePath();\n    }\n\n    // Draw moon\n    ctx.beginPath();\n    ctx.arc(50, 50, 30, 0, Math.PI * 2);\n    ctx.fillStyle = 'rgba(200, 200, 200, 0.5)';\n    ctx.fill();\n    ctx.closePath();\n}\n\nfunction animate() {\n    drawBackground();\n    particle.update();\n    particle.draw();\n    requestAnimationFrame(animate);\n}\n\nanimate();",
              },
              'index.html': {
                content:
                  '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003eBrownian Motion Visualizer\u003c/title\u003e\n    \u003cstyle\u003e\n        body {\n            margin: 0;\n            padding: 0;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 100vh;\n            background-color: #1a1a1a;\n        }\n        canvas {\n            border: 1px solid #333;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003ccanvas id="brownianCanvas"\u003e\u003c/canvas\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
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
            sandbox_url: 'https://msssts.csb.app/',
            combined_html:
              '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003eBrownian Motion Visualizer\u003c/title\u003e\n    \u003cstyle\u003e\n        body {\n            margin: 0;\n            padding: 0;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 100vh;\n            background-color: #1a1a1a;\n        }\n        canvas {\n            border: 1px solid #333;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003ccanvas id="brownianCanvas"\u003e\u003c/canvas\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003cscript\u003econst canvas = document.getElementById(\'brownianCanvas\');\nconst ctx = canvas.getContext(\'2d\');\n\ncanvas.width = 800;\ncanvas.height = 600;\n\nconst centerX = canvas.width / 2;\nconst centerY = canvas.height / 2;\n\nclass Particle {\n    constructor() {\n        this.x = centerX;\n        this.y = centerY;\n        this.radius = 5;\n        this.vx = 0;\n        this.vy = 0;\n        this.color = \'hsl(180, 100%, 50%)\';\n    }\n\n    update() {\n        // Brownian motion\n        this.vx += (Math.random() - 0.5) * 0.5;\n        this.vy += (Math.random() - 0.5) * 0.5;\n\n        // Gravitational force\n        const dx = centerX - this.x;\n        const dy = centerY - this.y;\n        const distance = Math.sqrt(dx * dx + dy * dy);\n        const force = distance * 0.0001;\n        this.vx += dx * force;\n        this.vy += dy * force;\n\n        // Update position\n        this.x += this.vx;\n        this.y += this.vy;\n\n        // Apply friction\n        this.vx *= 0.99;\n        this.vy *= 0.99;\n\n        // Update color based on velocity\n        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);\n        const hue = Math.min(360, Math.max(180, 180 + speed * 300));\n        this.color = `hsl(${hue}, 100%, 50%)`;\n    }\n\n    draw() {\n        ctx.beginPath();\n        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);\n        ctx.fillStyle = this.color;\n        ctx.fill();\n        ctx.closePath();\n    }\n}\n\nconst particle = new Particle();\n\nfunction drawBackground() {\n    ctx.fillStyle = \'rgba(26, 26, 26, 0.1)\';\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\n\n    // Draw stars\n    for (let i = 0; i \u003c 50; i++) {\n        ctx.beginPath();\n        ctx.arc(\n            Math.random() * canvas.width,\n            Math.random() * canvas.height,\n            Math.random() * 1.5,\n            0,\n            Math.PI * 2\n        );\n        ctx.fillStyle = \'rgba(255, 255, 255, 0.5)\';\n        ctx.fill();\n        ctx.closePath();\n    }\n\n    // Draw moon\n    ctx.beginPath();\n    ctx.arc(50, 50, 30, 0, Math.PI * 2);\n    ctx.fillStyle = \'rgba(200, 200, 200, 0.5)\';\n    ctx.fill();\n    ctx.closePath();\n}\n\nfunction animate() {\n    drawBackground();\n    particle.update();\n    particle.draw();\n    requestAnimationFrame(animate);\n}\n\nanimate();\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e',
            additional_notes:
              'This solution creates a Brownian Motion Visualizer using HTML5 Canvas and JavaScript. The particle moves randomly with a gravitational pull towards the center. Its color changes based on velocity, shifting from cool to warm colors as speed increases. The background includes a night sky effect with stars and a moon for improved aesthetics.',
            installation_commands: '',
          },
        },
        {
          model: 'anthropic/claude-3.5-sonnet',
          completion: {
            files: {
              'index.js': {
                content:
                  "const canvas = document.getElementById('canvas');\nconst ctx = canvas.getContext('2d');\nconst temperatureSlider = document.getElementById('temperatureSlider');\nconst temperatureValue = document.getElementById('temperatureValue');\n\ncanvas.width = 800;\ncanvas.height = 600;\n\nlet molecule = {\n    x: canvas.width / 2,\n    y: canvas.height / 2,\n    radius: 5,\n    color: '#16a085'\n};\n\nlet mouseX = 0;\nlet mouseY = 0;\n\nfunction drawMolecule() {\n    ctx.beginPath();\n    ctx.arc(molecule.x, molecule.y, molecule.radius, 0, Math.PI * 2);\n    ctx.fillStyle = molecule.color;\n    ctx.fill();\n    ctx.closePath();\n}\n\nfunction drawBackground() {\n    ctx.fillStyle = '#0a192f';\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\n\n    // Draw stars\n    for (let i = 0; i \u003c 100; i++) {\n        ctx.beginPath();\n        ctx.arc(\n            Math.random() * canvas.width,\n            Math.random() * canvas.height,\n            Math.random() * 1.5,\n            0,\n            Math.PI * 2\n        );\n        ctx.fillStyle = 'rgba(255, 255, 255, ' + Math.random() + ')';\n        ctx.fill();\n    }\n}\n\nfunction updateMoleculePosition() {\n    const temperature = parseInt(temperatureSlider.value);\n    const maxSpeed = temperature / 10;\n\n    const distanceFromCenter = Math.sqrt(\n        Math.pow(mouseX - canvas.width / 2, 2) + Math.pow(mouseY - canvas.height / 2, 2)\n    );\n    const maxDistance = Math.sqrt(Math.pow(canvas.width / 2, 2) + Math.pow(canvas.height / 2, 2));\n    const erraticFactor = distanceFromCenter / maxDistance;\n\n    const dx = (Math.random() - 0.5) * maxSpeed * (1 + erraticFactor);\n    const dy = (Math.random() - 0.5) * maxSpeed * (1 + erraticFactor);\n\n    molecule.x += dx;\n    molecule.y += dy;\n\n    // Keep the molecule within the canvas\n    molecule.x = Math.max(molecule.radius, Math.min(canvas.width - molecule.radius, molecule.x));\n    molecule.y = Math.max(molecule.radius, Math.min(canvas.height - molecule.radius, molecule.y));\n}\n\nfunction animate() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    drawBackground();\n    updateMoleculePosition();\n    drawMolecule();\n    requestAnimationFrame(animate);\n}\n\ncanvas.addEventListener('mousemove', (event) =\u003e {\n    const rect = canvas.getBoundingClientRect();\n    mouseX = event.clientX - rect.left;\n    mouseY = event.clientY - rect.top;\n});\n\ntemperatureSlider.addEventListener('input', () =\u003e {\n    temperatureValue.textContent = temperatureSlider.value;\n});\n\nanimate();",
              },
              'index.html': {
                content:
                  '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003eBrownian Motion Visualizer\u003c/title\u003e\n    \u003cstyle\u003e\n        body {\n            margin: 0;\n            padding: 0;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 100vh;\n            background-color: #1a1a2e;\n            font-family: Arial, sans-serif;\n        }\n        #canvas {\n            border: 2px solid #e94560;\n        }\n        #controls {\n            position: absolute;\n            bottom: 20px;\n            display: flex;\n            align-items: center;\n            color: #ffffff;\n        }\n        #temperatureSlider {\n            width: 200px;\n            margin: 0 10px;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003ccanvas id="canvas"\u003e\u003c/canvas\u003e\n    \u003cdiv id="controls"\u003e\n        \u003clabel for="temperatureSlider"\u003eTemperature:\u003c/label\u003e\n        \u003cinput type="range" id="temperatureSlider" min="1" max="100" value="50"\u003e\n        \u003cspan id="temperatureValue"\u003e50\u003c/span\u003e\n    \u003c/div\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
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
            sandbox_url: 'https://ltqcj8.csb.app/',
            combined_html:
              '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003eBrownian Motion Visualizer\u003c/title\u003e\n    \u003cstyle\u003e\n        body {\n            margin: 0;\n            padding: 0;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 100vh;\n            background-color: #1a1a2e;\n            font-family: Arial, sans-serif;\n        }\n        #canvas {\n            border: 2px solid #e94560;\n        }\n        #controls {\n            position: absolute;\n            bottom: 20px;\n            display: flex;\n            align-items: center;\n            color: #ffffff;\n        }\n        #temperatureSlider {\n            width: 200px;\n            margin: 0 10px;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003ccanvas id="canvas"\u003e\u003c/canvas\u003e\n    \u003cdiv id="controls"\u003e\n        \u003clabel for="temperatureSlider"\u003eTemperature:\u003c/label\u003e\n        \u003cinput type="range" id="temperatureSlider" min="1" max="100" value="50"\u003e\n        \u003cspan id="temperatureValue"\u003e50\u003c/span\u003e\n    \u003c/div\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003cscript\u003econst canvas = document.getElementById(\'canvas\');\nconst ctx = canvas.getContext(\'2d\');\nconst temperatureSlider = document.getElementById(\'temperatureSlider\');\nconst temperatureValue = document.getElementById(\'temperatureValue\');\n\ncanvas.width = 800;\ncanvas.height = 600;\n\nlet molecule = {\n    x: canvas.width / 2,\n    y: canvas.height / 2,\n    radius: 5,\n    color: \'#16a085\'\n};\n\nlet mouseX = 0;\nlet mouseY = 0;\n\nfunction drawMolecule() {\n    ctx.beginPath();\n    ctx.arc(molecule.x, molecule.y, molecule.radius, 0, Math.PI * 2);\n    ctx.fillStyle = molecule.color;\n    ctx.fill();\n    ctx.closePath();\n}\n\nfunction drawBackground() {\n    ctx.fillStyle = \'#0a192f\';\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\n\n    // Draw stars\n    for (let i = 0; i \u003c 100; i++) {\n        ctx.beginPath();\n        ctx.arc(\n            Math.random() * canvas.width,\n            Math.random() * canvas.height,\n            Math.random() * 1.5,\n            0,\n            Math.PI * 2\n        );\n        ctx.fillStyle = \'rgba(255, 255, 255, \' + Math.random() + \')\';\n        ctx.fill();\n    }\n}\n\nfunction updateMoleculePosition() {\n    const temperature = parseInt(temperatureSlider.value);\n    const maxSpeed = temperature / 10;\n\n    const distanceFromCenter = Math.sqrt(\n        Math.pow(mouseX - canvas.width / 2, 2) + Math.pow(mouseY - canvas.height / 2, 2)\n    );\n    const maxDistance = Math.sqrt(Math.pow(canvas.width / 2, 2) + Math.pow(canvas.height / 2, 2));\n    const erraticFactor = distanceFromCenter / maxDistance;\n\n    const dx = (Math.random() - 0.5) * maxSpeed * (1 + erraticFactor);\n    const dy = (Math.random() - 0.5) * maxSpeed * (1 + erraticFactor);\n\n    molecule.x += dx;\n    molecule.y += dy;\n\n    // Keep the molecule within the canvas\n    molecule.x = Math.max(molecule.radius, Math.min(canvas.width - molecule.radius, molecule.x));\n    molecule.y = Math.max(molecule.radius, Math.min(canvas.height - molecule.radius, molecule.y));\n}\n\nfunction animate() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    drawBackground();\n    updateMoleculePosition();\n    drawMolecule();\n    requestAnimationFrame(animate);\n}\n\ncanvas.addEventListener(\'mousemove\', (event) =\u003e {\n    const rect = canvas.getBoundingClientRect();\n    mouseX = event.clientX - rect.left;\n    mouseY = event.clientY - rect.top;\n});\n\ntemperatureSlider.addEventListener(\'input\', () =\u003e {\n    temperatureValue.textContent = temperatureSlider.value;\n});\n\nanimate();\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e',
            additional_notes:
              "This solution creates a Brownian Motion Visualizer using HTML5 Canvas and JavaScript. The visualization includes a single molecule moving randomly on a 2D canvas, with its movement affected by the user's mouse position and a temperature slider. The background simulates a night sky with stars for added visual appeal. No additional installation is required as it uses only built-in browser features.",
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
  {
    taskId: 'demo5',
    title: 'LLM Code Generation Task (Demo)',
    body: 'Create a web application using only HTML, CSS, and JavaScript that showcases threejs or plotly graph visualization library.',
    expireAt: '2099-08-30T14:09:13Z',
    type: 'CODE_GENERATION',
    taskData: {
      task: 'CODE_GENERATION',
      prompt:
        'Create a web application using only HTML, CSS, and JavaScript that showcases threejs or plotly graph visualization library.',
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
              "\u003C!DOCTYPE html\u003E\u003Chtml lang=\"en\"\u003E\u003Chead\u003E\u003Cmeta charset=\"UTF-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\u003Ctitle\u003EPlotly.js 3D Scatter Plot Demo\u003C/title\u003E\u003Cscript src=\"https://cdnjs.cloudflare.com/ajax/libs/plotly.js/2.24.2/plotly.min.js\"\u003E\u003C/script\u003E\u003C/head\u003E\u003Cbody\u003E\u003Cdiv id=\"myPlot\" style=\"width:100%;height:600px;\"\u003E\u003C/div\u003E\u003Cscript\u003Efunction generateData(n){const x=[],y=[],z=[];for(let i=0;i\u003Cn;i++){x.push(Math.random()*100);y.push(Math.random()*100);z.push(Math.random()*100);}return{x,y,z};}const data=generateData(100);const trace={x:data.x,y:data.y,z:data.z,mode:'markers',marker:{size:5,color:data.z,colorscale:'Viridis',opacity:0.8},type:'scatter3d'};const layout={title:'3D Scatter Plot',scene:{xaxis:{title:'X Axis'},yaxis:{title:'Y Axis'},zaxis:{title:'Z Axis'}},margin:{l:0,r:0,b:0,t:40}};Plotly.newPlot('myPlot',[trace],layout);\u003C/script\u003E\u003C/body\u003E\u003C/html\u003E",
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
              '\u003C!DOCTYPE html\u003E\u003Chtml lang="en"\u003E\u003Chead\u003E\u003Cmeta charset="UTF-8"\u003E\u003Cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003E\u003Ctitle\u003EThree.js Cube Catcher Game\u003C/title\u003E\u003Cstyle\u003Ebody { margin: 0; overflow: hidden; } #score { position: absolute; top: 10px; left: 10px; color: white; font-family: Arial, sans-serif; font-size: 18px; }\u003C/style\u003E\u003C/head\u003E\u003Cbody\u003E\u003Cdiv id="score"\u003EScore: 0\u003C/div\u003E\u003Cscript src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"\u003E\u003C/script\u003E\u003Cscript\u003Elet scene,camera,renderer,platform,cube;let cubes=[];let score=0;let scoreElement;function init(){scoreElement=document.getElementById(\'score\');scene=new THREE.Scene();camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);renderer=new THREE.WebGLRenderer();renderer.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(renderer.domElement);const platformGeometry=new THREE.BoxGeometry(2,0.2,2);const platformMaterial=new THREE.MeshBasicMaterial({color:0x00ff00});platform=new THREE.Mesh(platformGeometry,platformMaterial);platform.position.y=-5;scene.add(platform);camera.position.z=10;document.addEventListener(\'mousemove\',onMouseMove,false);spawnCube()}function spawnCube(){const geometry=new THREE.BoxGeometry(0.5,0.5,0.5);const material=new THREE.MeshBasicMaterial({color:Math.random()*0xffffff});cube=new THREE.Mesh(geometry,material);cube.position.x=Math.random()*8-4;cube.position.y=7;scene.add(cube);cubes.push(cube)}function onMouseMove(event){const mouseX=(event.clientX/window.innerWidth)*2-1;platform.position.x=mouseX*4}function updateScore(){scoreElement.textContent=`Score: ${score}`}function animate(){requestAnimationFrame(animate);cubes.forEach((cube,index)=\u003E{cube.position.y-=0.05;if(cube.position.y\u003C-6){scene.remove(cube);cubes.splice(index,1)}if(cube.position.y\u003C=platform.position.y+0.2&&Math.abs(cube.position.x-platform.position.x)\u003C1){scene.remove(cube);cubes.splice(index,1);score++;updateScore()}});if(Math.random()\u003C0.02){spawnCube()}renderer.render(scene,camera)}init();animate()\u003C/script\u003E\u003C/body\u003E\u003C/html\u003E',
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
              '\u003C!DOCTYPE html\u003E\n\u003Chtml lang="en"\u003E\n\u003Chead\u003E\n    \u003Cmeta charset="UTF-8"\u003E\n    \u003Cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003E\n    \u003Ctitle\u003EHangman\u003C/title\u003E\n    \u003Cscript src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"\u003E\u003C/script\u003E\n    \u003Cstyle\u003E\n        body {\n            font-family: Arial, sans-serif;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 100vh;\n            margin: 0;\n            background-color: #f0f0f0;\n        }\n        #game-container {\n            text-align: center;\n        }\n        #word-display {\n            font-size: 2em;\n            margin-bottom: 20px;\n            letter-spacing: 0.5em;\n        }\n        #hangman-drawing {\n            width: 200px;\n            height: 250px;\n            margin: 0 auto;\n        }\n        #guesses {\n            margin-top: 20px;\n        }\n        button {\n            margin: 5px;\n            padding: 5px 10px;\n            font-size: 1em;\n        }\n    \u003C/style\u003E\n\u003C/head\u003E\n\u003Cbody\u003E\n    \u003Cdiv id="game-container"\u003E\n        \u003Ch1\u003EHangman\u003C/h1\u003E\n        \u003Cdiv id="word-display"\u003E\u003C/div\u003E\n        \u003Csvg id="hangman-drawing" viewBox="0 0 200 250"\u003E\n            \u003Cline x1="20" y1="230" x2="180" y2="230" stroke="black" stroke-width="4"/\u003E\n            \u003Cline x1="40" y1="230" x2="40" y2="20" stroke="black" stroke-width="4"/\u003E\n            \u003Cline x1="40" y1="20" x2="140" y2="20" stroke="black" stroke-width="4"/\u003E\n            \u003Cline x1="140" y1="20" x2="140" y2="50" stroke="black" stroke-width="4"/\u003E\n            \u003Ccircle cx="140" cy="80" r="30" stroke="black" stroke-width="4" fill="none"/\u003E\n            \u003Cline x1="140" y1="110" x2="140" y2="180" stroke="black" stroke-width="4"/\u003E\n            \u003Cline x1="140" y1="130" x2="110" y2="160" stroke="black" stroke-width="4"/\u003E\n            \u003Cline x1="140" y1="130" x2="170" y2="160" stroke="black" stroke-width="4"/\u003E\n            \u003Cline x1="140" y1="180" x2="110" y2="210" stroke="black" stroke-width="4"/\u003E\n            \u003Cline x1="140" y1="180" x2="170" y2="210" stroke="black" stroke-width="4"/\u003E\n        \u003C/svg\u003E\n        \u003Cdiv id="guesses"\u003E\u003C/div\u003E\n        \u003Cp id="message"\u003E\u003C/p\u003E\n        \u003Cbutton id="new-game"\u003ENew Game\u003C/button\u003E\n    \u003C/div\u003E\n    \u003Cscript\u003E\n        const words = ["javascript", "hangman", "game", "programming", "computer", "animation"];\n        let word, guessedLetters, remainingGuesses;\n        const maxGuesses = 6;\n\n        const wordDisplay = document.getElementById("word-display");\n        const guessesElement = document.getElementById("guesses");\n        const messageElement = document.getElementById("message");\n        const newGameButton = document.getElementById("new-game");\n\n        const hangmanParts = [\n            "circle", "line:nth-of-type(5)", "line:nth-of-type(6)", "line:nth-of-type(7)",\n            "line:nth-of-type(8)", "line:nth-of-type(9)", "line:nth-of-type(10)"\n        ];\n\n        function initGame() {\n            word = words[Math.floor(Math.random() * words.length)];\n            guessedLetters = [];\n            remainingGuesses = maxGuesses;\n            updateWordDisplay();\n            updateGuesses();\n            messageElement.textContent = "";\n            hangmanParts.forEach(part =\u003E {\n                document.querySelector(`#hangman-drawing ${part}`).style.opacity = "0";\n            });\n        }\n\n        function updateWordDisplay() {\n            wordDisplay.textContent = word\n                .split("")\n                .map(letter =\u003E guessedLetters.includes(letter.toLowerCase()) ? letter : "_")\n                .join("");\n        }\n\n        function updateGuesses() {\n            guessesElement.innerHTML = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"\n                .split("")\n                .map(letter =\u003E `\u003Cbutton ${guessedLetters.includes(letter.toLowerCase()) ? "disabled" : ""} onclick="guess(\'${letter}\')"\u003E${letter}\u003C/button\u003E`)\n                .join("");\n        }\n\n        function guess(letter) {\n            letter = letter.toLowerCase();\n            if (!guessedLetters.includes(letter)) {\n                guessedLetters.push(letter);\n                if (!word.toLowerCase().includes(letter)) {\n                    remainingGuesses--;\n                    animateHangman();\n                }\n                updateWordDisplay();\n                updateGuesses();\n                checkGameEnd();\n            }\n        }\n\n        function animateHangman() {\n            const part = document.querySelector(`#hangman-drawing ${hangmanParts[maxGuesses - remainingGuesses - 1]}`);\n            anime({\n                targets: part,\n                opacity: 1,\n                duration: 500,\n                easing: "easeInOutQuad"\n            });\n        }\n\n        function checkGameEnd() {\n            if (word.toLowerCase() === wordDisplay.textContent.toLowerCase()) {\n                messageElement.textContent = "Congratulations! You won!";\n                disableAllButtons();\n            } else if (remainingGuesses === 0) {\n                messageElement.textContent = `Game over! The word was "${word}".`;\n                disableAllButtons();\n            }\n        }\n\n        function disableAllButtons() {\n            document.querySelectorAll("#guesses button").forEach(button =\u003E button.disabled = true);\n        }\n\n        newGameButton.addEventListener("click", initGame);\n\n        initGame();\n    \u003C/script\u003E\n\u003C/body\u003E\n\u003C/html\u003E',
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
    taskId: '6bede419-e9f0-465c-9787-ad958b18d35d',
    title: 'LLM Code Generation Task (Demo)',
    body: "Create an interactive visualization of a Newton's cradle, a classic physics demonstration that illustrates conservation of momentum and energy. The visualization should depict a set of suspended metal balls that can swing and collide, demonstrating the transfer of energy through the system.\n\nThe scene should display a horizontal support from which five metal balls are suspended by strings. The balls should be arranged in a row, just touching each other when at rest. The visualization should allow users to interact with the Newton's cradle and observe its behavior.\n\nRequirements:\n\n1. Implement the physics simulation for the Newton's cradle, including the swinging motion of the balls and the elastic collisions between them. When a ball on one end is lifted and released, it should swing down and collide with the stationary balls, causing the ball on the opposite end to swing upward.\n\n2. Add a user interaction where clicking and dragging the leftmost or rightmost ball allows the user to pull it back and release it, initiating the Newton's cradle effect. The ball should follow the mouse cursor while being dragged, maintaining a realistic arc motion.\n\n3. Include a slider that adjusts the simulation speed, allowing users to observe the Newton's cradle effect in slow motion or at an accelerated pace. The slider should smoothly transition between different speeds without disrupting the ongoing simulation.\nNote:\n- The visualization should be implemented in JavaScript with HTML and CSS.\n- Ensure that the output has both index.js and index.html files\n",
    expireAt: '2025-09-09T05:33:57Z',
    type: 'CODE_GENERATION',
    taskData: {
      task: 'CODE_GENERATION',
      prompt:
        "Create an interactive visualization of a Newton's cradle, a classic physics demonstration that illustrates conservation of momentum and energy. The visualization should depict a set of suspended metal balls that can swing and collide, demonstrating the transfer of energy through the system.\n\nThe scene should display a horizontal support from which five metal balls are suspended by strings. The balls should be arranged in a row, just touching each other when at rest. The visualization should allow users to interact with the Newton's cradle and observe its behavior.\n\nRequirements:\n\n1. Implement the physics simulation for the Newton's cradle, including the swinging motion of the balls and the elastic collisions between them. When a ball on one end is lifted and released, it should swing down and collide with the stationary balls, causing the ball on the opposite end to swing upward.\n\n2. Add a user interaction where clicking and dragging the leftmost or rightmost ball allows the user to pull it back and release it, initiating the Newton's cradle effect. The ball should follow the mouse cursor while being dragged, maintaining a realistic arc motion.\n\n3. Include a slider that adjusts the simulation speed, allowing users to observe the Newton's cradle effect in slow motion or at an accelerated pace. The slider should smoothly transition between different speeds without disrupting the ongoing simulation.\nNote:\n- The visualization should be implemented in JavaScript with HTML and CSS.\n- Ensure that the output has both index.js and index.html files\n",
      criteria: [
        {
          max: 100,
          min: 1,
          type: 'multi-score',
          options: [
            'anthropic/claude-3.5-sonnet',
            'anthropic/claude-3.5-sonnet',
            'anthropic/claude-3.5-sonnet',
            'anthropic/claude-3.5-sonnet',
          ],
        },
      ],
      responses: [
        {
          model: 'anthropic/claude-3.5-sonnet',
          completion: {
            files: {
              'index.js': {
                content:
                  "const canvas = document.getElementById('newtonsCradle');\nconst ctx = canvas.getContext('2d');\nconst speedSlider = document.getElementById('speedSlider');\n\nlet width = canvas.width = window.innerWidth;\nlet height = canvas.height = window.innerHeight;\n\nconst Engine = Matter.Engine,\n    Render = Matter.Render,\n    Runner = Matter.Runner,\n    Bodies = Matter.Bodies,\n    Composite = Matter.Composite,\n    Constraint = Matter.Constraint,\n    Mouse = Matter.Mouse,\n    MouseConstraint = Matter.MouseConstraint;\n\nconst engine = Engine.create();\nengine.world.gravity.y = 1;\n\nconst render = Render.create({\n    canvas: canvas,\n    engine: engine,\n    options: {\n        width: width,\n        height: height,\n        wireframes: false,\n        background: '#f0f0f0'\n    }\n});\n\nconst supportHeight = 50;\nconst support = Bodies.rectangle(width / 2, supportHeight / 2, width, supportHeight, { isStatic: true, render: { fillStyle: '#4a4a4a' } });\n\nconst ballRadius = 30;\nconst ballGap = 2;\nconst stringLength = height / 2;\nconst balls = [];\nconst constraints = [];\n\nfor (let i = 0; i \u003c 5; i++) {\n    const x = width / 2 + (i - 2) * (ballRadius * 2 + ballGap);\n    const y = height / 2 + stringLength;\n    const ball = Bodies.circle(x, y, ballRadius, {\n        inertia: Infinity,\n        restitution: 1,\n        friction: 0,\n        frictionAir: 0,\n        slop: 1,\n        render: { fillStyle: '#8c8c8c', strokeStyle: '#666', lineWidth: 2 }\n    });\n    balls.push(ball);\n\n    const constraint = Constraint.create({\n        pointA: { x: x, y: supportHeight },\n        bodyB: ball,\n        length: stringLength,\n        stiffness: 1,\n        render: { strokeStyle: '#4a4a4a', lineWidth: 2 }\n    });\n    constraints.push(constraint);\n}\n\nComposite.add(engine.world, [support, ...balls, ...constraints]);\n\nconst mouse = Mouse.create(render.canvas);\nconst mouseConstraint = MouseConstraint.create(engine, {\n    mouse: mouse,\n    constraint: {\n        stiffness: 0.2,\n        render: { visible: false }\n    }\n});\n\nComposite.add(engine.world, mouseConstraint);\n\nRender.run(render);\nconst runner = Runner.create();\nRunner.run(runner, engine);\n\nlet isDragging = false;\nlet draggedBall = null;\n\nMatter.Events.on(mouseConstraint, 'startdrag', (event) =\u003e {\n    const { body } = event;\n    if (body === balls[0] || body === balls[4]) {\n        isDragging = true;\n        draggedBall = body;\n    }\n});\n\nMatter.Events.on(mouseConstraint, 'enddrag', () =\u003e {\n    isDragging = false;\n    draggedBall = null;\n});\n\nMatter.Events.on(engine, 'afterUpdate', () =\u003e {\n    if (isDragging \u0026\u0026 draggedBall) {\n        const mousePosition = mouse.position;\n        const anchorPoint = { x: draggedBall.position.x, y: supportHeight };\n        const angle = Math.atan2(mousePosition.y - anchorPoint.y, mousePosition.x - anchorPoint.x);\n        const distance = Math.min(stringLength, Matter.Vector.magnitude(Matter.Vector.sub(mousePosition, anchorPoint)));\n        const newPosition = {\n            x: anchorPoint.x + distance * Math.cos(angle),\n            y: anchorPoint.y + distance * Math.sin(angle)\n        };\n        Matter.Body.setPosition(draggedBall, newPosition);\n    }\n});\n\nspeedSlider.addEventListener('input', (event) =\u003e {\n    const speed = parseFloat(event.target.value);\n    engine.timing.timeScale = speed;\n});\n\nwindow.addEventListener('resize', () =\u003e {\n    width = canvas.width = window.innerWidth;\n    height = canvas.height = window.innerHeight;\n    Render.setPixelRatio(render, window.devicePixelRatio);\n    Render.setSize(render, width, height);\n    Matter.Body.setPosition(support, { x: width / 2, y: supportHeight / 2 });\n    for (let i = 0; i \u003c 5; i++) {\n        const x = width / 2 + (i - 2) * (ballRadius * 2 + ballGap);\n        Matter.Body.setPosition(balls[i], { x: x, y: height / 2 + stringLength });\n        constraints[i].pointA = { x: x, y: supportHeight };\n    }\n});",
              },
              'index.html': {
                content:
                  '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003eNewton\'s Cradle\u003c/title\u003e\n    \u003cstyle\u003e\n        body {\n            margin: 0;\n            overflow: hidden;\n            background-color: #f0f0f0;\n        }\n        canvas {\n            display: block;\n        }\n        #speedSlider {\n            position: absolute;\n            bottom: 20px;\n            left: 50%;\n            transform: translateX(-50%);\n            width: 200px;\n        }\n        #instructions {\n            position: absolute;\n            top: 10px;\n            left: 10px;\n            color: #333;\n            font-family: Arial, sans-serif;\n            font-size: 14px;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003ccanvas id="newtonsCradle"\u003e\u003c/canvas\u003e\n    \u003cinput type="range" id="speedSlider" min="0.1" max="2" step="0.1" value="1"\u003e\n    \u003cdiv id="instructions"\u003eClick and drag the leftmost or rightmost ball to interact\u003c/div\u003e\n    \u003cscript src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.18.0/matter.min.js"\u003e\u003c/script\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
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
            sandbox_url: 'https://5g6fyj.csb.app/',
            combined_html:
              '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003eNewton\'s Cradle\u003c/title\u003e\n    \u003cstyle\u003e\n        body {\n            margin: 0;\n            overflow: hidden;\n            background-color: #f0f0f0;\n        }\n        canvas {\n            display: block;\n        }\n        #speedSlider {\n            position: absolute;\n            bottom: 20px;\n            left: 50%;\n            transform: translateX(-50%);\n            width: 200px;\n        }\n        #instructions {\n            position: absolute;\n            top: 10px;\n            left: 10px;\n            color: #333;\n            font-family: Arial, sans-serif;\n            font-size: 14px;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003ccanvas id="newtonsCradle"\u003e\u003c/canvas\u003e\n    \u003cinput type="range" id="speedSlider" min="0.1" max="2" step="0.1" value="1"\u003e\n    \u003cdiv id="instructions"\u003eClick and drag the leftmost or rightmost ball to interact\u003c/div\u003e\n    \u003cscript src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.18.0/matter.min.js"\u003e\u003c/script\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003cscript\u003econst canvas = document.getElementById(\'newtonsCradle\');\nconst ctx = canvas.getContext(\'2d\');\nconst speedSlider = document.getElementById(\'speedSlider\');\n\nlet width = canvas.width = window.innerWidth;\nlet height = canvas.height = window.innerHeight;\n\nconst Engine = Matter.Engine,\n    Render = Matter.Render,\n    Runner = Matter.Runner,\n    Bodies = Matter.Bodies,\n    Composite = Matter.Composite,\n    Constraint = Matter.Constraint,\n    Mouse = Matter.Mouse,\n    MouseConstraint = Matter.MouseConstraint;\n\nconst engine = Engine.create();\nengine.world.gravity.y = 1;\n\nconst render = Render.create({\n    canvas: canvas,\n    engine: engine,\n    options: {\n        width: width,\n        height: height,\n        wireframes: false,\n        background: \'#f0f0f0\'\n    }\n});\n\nconst supportHeight = 50;\nconst support = Bodies.rectangle(width / 2, supportHeight / 2, width, supportHeight, { isStatic: true, render: { fillStyle: \'#4a4a4a\' } });\n\nconst ballRadius = 30;\nconst ballGap = 2;\nconst stringLength = height / 2;\nconst balls = [];\nconst constraints = [];\n\nfor (let i = 0; i \u003c 5; i++) {\n    const x = width / 2 + (i - 2) * (ballRadius * 2 + ballGap);\n    const y = height / 2 + stringLength;\n    const ball = Bodies.circle(x, y, ballRadius, {\n        inertia: Infinity,\n        restitution: 1,\n        friction: 0,\n        frictionAir: 0,\n        slop: 1,\n        render: { fillStyle: \'#8c8c8c\', strokeStyle: \'#666\', lineWidth: 2 }\n    });\n    balls.push(ball);\n\n    const constraint = Constraint.create({\n        pointA: { x: x, y: supportHeight },\n        bodyB: ball,\n        length: stringLength,\n        stiffness: 1,\n        render: { strokeStyle: \'#4a4a4a\', lineWidth: 2 }\n    });\n    constraints.push(constraint);\n}\n\nComposite.add(engine.world, [support, ...balls, ...constraints]);\n\nconst mouse = Mouse.create(render.canvas);\nconst mouseConstraint = MouseConstraint.create(engine, {\n    mouse: mouse,\n    constraint: {\n        stiffness: 0.2,\n        render: { visible: false }\n    }\n});\n\nComposite.add(engine.world, mouseConstraint);\n\nRender.run(render);\nconst runner = Runner.create();\nRunner.run(runner, engine);\n\nlet isDragging = false;\nlet draggedBall = null;\n\nMatter.Events.on(mouseConstraint, \'startdrag\', (event) =\u003e {\n    const { body } = event;\n    if (body === balls[0] || body === balls[4]) {\n        isDragging = true;\n        draggedBall = body;\n    }\n});\n\nMatter.Events.on(mouseConstraint, \'enddrag\', () =\u003e {\n    isDragging = false;\n    draggedBall = null;\n});\n\nMatter.Events.on(engine, \'afterUpdate\', () =\u003e {\n    if (isDragging \u0026\u0026 draggedBall) {\n        const mousePosition = mouse.position;\n        const anchorPoint = { x: draggedBall.position.x, y: supportHeight };\n        const angle = Math.atan2(mousePosition.y - anchorPoint.y, mousePosition.x - anchorPoint.x);\n        const distance = Math.min(stringLength, Matter.Vector.magnitude(Matter.Vector.sub(mousePosition, anchorPoint)));\n        const newPosition = {\n            x: anchorPoint.x + distance * Math.cos(angle),\n            y: anchorPoint.y + distance * Math.sin(angle)\n        };\n        Matter.Body.setPosition(draggedBall, newPosition);\n    }\n});\n\nspeedSlider.addEventListener(\'input\', (event) =\u003e {\n    const speed = parseFloat(event.target.value);\n    engine.timing.timeScale = speed;\n});\n\nwindow.addEventListener(\'resize\', () =\u003e {\n    width = canvas.width = window.innerWidth;\n    height = canvas.height = window.innerHeight;\n    Render.setPixelRatio(render, window.devicePixelRatio);\n    Render.setSize(render, width, height);\n    Matter.Body.setPosition(support, { x: width / 2, y: supportHeight / 2 });\n    for (let i = 0; i \u003c 5; i++) {\n        const x = width / 2 + (i - 2) * (ballRadius * 2 + ballGap);\n        Matter.Body.setPosition(balls[i], { x: x, y: height / 2 + stringLength });\n        constraints[i].pointA = { x: x, y: supportHeight };\n    }\n});\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e',
            additional_notes:
              "This implementation uses the Matter.js physics engine to create an interactive Newton's Cradle visualization. The user can interact with the leftmost and rightmost balls by clicking and dragging them. A speed slider at the bottom of the screen allows adjusting the simulation speed. The visualization is responsive and will adapt to different screen sizes.",
            installation_commands: 'npm install matter-js',
          },
        },
        {
          model: 'anthropic/claude-3.5-sonnet',
          completion: {
            files: {
              'index.js': {
                content:
                  "const canvas = document.getElementById('newtonsCradle');\nconst ctx = canvas.getContext('2d');\n\nlet width, height;\nlet balls = [];\nlet draggingBall = null;\nlet mouseX, mouseY;\n\nclass Ball {\n    constructor(x, y, radius) {\n        this.x = x;\n        this.y = y;\n        this.radius = radius;\n        this.angle = 0;\n        this.velocity = 0;\n        this.acceleration = 0;\n    }\n\n    draw() {\n        ctx.beginPath();\n        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);\n        ctx.fillStyle = '#808080';\n        ctx.fill();\n        ctx.strokeStyle = '#606060';\n        ctx.lineWidth = 2;\n        ctx.stroke();\n    }\n\n    update() {\n        this.velocity += this.acceleration;\n        this.angle += this.velocity;\n        this.acceleration = -0.001 * Math.sin(this.angle);\n        this.x = width / 2 + (this.angle * 100);\n        this.y = height / 2 + Math.abs(this.angle * 100);\n    }\n}\n\nfunction init() {\n    width = canvas.width = window.innerWidth;\n    height = canvas.height = window.innerHeight;\n\n    balls = [];\n    for (let i = 0; i \u003c 5; i++) {\n        balls.push(new Ball(width / 2 + (i - 2) * 50, height / 2, 20));\n    }\n}\n\nfunction animate() {\n    ctx.clearRect(0, 0, width, height);\n\n    // Draw support\n    ctx.beginPath();\n    ctx.moveTo(width / 2 - 150, height / 2 - 100);\n    ctx.lineTo(width / 2 + 150, height / 2 - 100);\n    ctx.strokeStyle = '#333';\n    ctx.lineWidth = 5;\n    ctx.stroke();\n\n    // Draw strings\n    ctx.beginPath();\n    for (let ball of balls) {\n        ctx.moveTo(ball.x, ball.y);\n        ctx.lineTo(ball.x, height / 2 - 100);\n    }\n    ctx.strokeStyle = '#999';\n    ctx.lineWidth = 2;\n    ctx.stroke();\n\n    // Update and draw balls\n    for (let ball of balls) {\n        if (ball !== draggingBall) {\n            ball.update();\n        }\n        ball.draw();\n    }\n\n    // Handle collisions\n    handleCollisions();\n\n    requestAnimationFrame(animate);\n}\n\nfunction handleCollisions() {\n    for (let i = 0; i \u003c balls.length - 1; i++) {\n        if (balls[i].x + balls[i].radius \u003e balls[i + 1].x - balls[i + 1].radius) {\n            let temp = balls[i].velocity;\n            balls[i].velocity = balls[i + 1].velocity;\n            balls[i + 1].velocity = temp;\n        }\n    }\n}\n\ncanvas.addEventListener('mousedown', (e) =\u003e {\n    mouseX = e.clientX;\n    mouseY = e.clientY;\n    for (let ball of [balls[0], balls[4]]) {\n        if (Math.hypot(mouseX - ball.x, mouseY - ball.y) \u003c ball.radius) {\n            draggingBall = ball;\n            break;\n        }\n    }\n});\n\ncanvas.addEventListener('mousemove', (e) =\u003e {\n    if (draggingBall) {\n        mouseX = e.clientX;\n        mouseY = e.clientY;\n        let dx = mouseX - width / 2;\n        let dy = mouseY - height / 2;\n        let angle = Math.atan2(dy, dx);\n        draggingBall.angle = angle;\n        draggingBall.x = width / 2 + Math.cos(angle) * 100;\n        draggingBall.y = height / 2 + Math.abs(Math.sin(angle) * 100);\n    }\n});\n\ncanvas.addEventListener('mouseup', () =\u003e {\n    if (draggingBall) {\n        draggingBall.velocity = 0;\n        draggingBall = null;\n    }\n});\n\nwindow.addEventListener('resize', init);\n\ninit();\nanimate();",
              },
              'index.html': {
                content:
                  '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003eNewton\'s Cradle\u003c/title\u003e\n    \u003cstyle\u003e\n        body {\n            margin: 0;\n            overflow: hidden;\n            background-color: #f0f0f0;\n        }\n        canvas {\n            display: block;\n        }\n        #instructions {\n            position: absolute;\n            bottom: 10px;\n            left: 10px;\n            color: #333;\n            font-family: Arial, sans-serif;\n            font-size: 14px;\n            background-color: rgba(255, 255, 255, 0.7);\n            padding: 5px 10px;\n            border-radius: 5px;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003ccanvas id="newtonsCradle"\u003e\u003c/canvas\u003e\n    \u003cdiv id="instructions"\u003eClick and drag the leftmost or rightmost ball to interact\u003c/div\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
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
            sandbox_url: 'https://3fqv89.csb.app/',
            combined_html:
              "\u003c!DOCTYPE html\u003e\n\u003chtml lang=\"en\"\u003e\n\u003chead\u003e\n    \u003cmeta charset=\"UTF-8\"\u003e\n    \u003cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003e\n    \u003ctitle\u003eNewton's Cradle\u003c/title\u003e\n    \u003cstyle\u003e\n        body {\n            margin: 0;\n            overflow: hidden;\n            background-color: #f0f0f0;\n        }\n        canvas {\n            display: block;\n        }\n        #instructions {\n            position: absolute;\n            bottom: 10px;\n            left: 10px;\n            color: #333;\n            font-family: Arial, sans-serif;\n            font-size: 14px;\n            background-color: rgba(255, 255, 255, 0.7);\n            padding: 5px 10px;\n            border-radius: 5px;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003ccanvas id=\"newtonsCradle\"\u003e\u003c/canvas\u003e\n    \u003cdiv id=\"instructions\"\u003eClick and drag the leftmost or rightmost ball to interact\u003c/div\u003e\n    \u003cscript src=\"index.js\"\u003e\u003c/script\u003e\n\u003cscript\u003econst canvas = document.getElementById('newtonsCradle');\nconst ctx = canvas.getContext('2d');\n\nlet width, height;\nlet balls = [];\nlet draggingBall = null;\nlet mouseX, mouseY;\n\nclass Ball {\n    constructor(x, y, radius) {\n        this.x = x;\n        this.y = y;\n        this.radius = radius;\n        this.angle = 0;\n        this.velocity = 0;\n        this.acceleration = 0;\n    }\n\n    draw() {\n        ctx.beginPath();\n        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);\n        ctx.fillStyle = '#808080';\n        ctx.fill();\n        ctx.strokeStyle = '#606060';\n        ctx.lineWidth = 2;\n        ctx.stroke();\n    }\n\n    update() {\n        this.velocity += this.acceleration;\n        this.angle += this.velocity;\n        this.acceleration = -0.001 * Math.sin(this.angle);\n        this.x = width / 2 + (this.angle * 100);\n        this.y = height / 2 + Math.abs(this.angle * 100);\n    }\n}\n\nfunction init() {\n    width = canvas.width = window.innerWidth;\n    height = canvas.height = window.innerHeight;\n\n    balls = [];\n    for (let i = 0; i \u003c 5; i++) {\n        balls.push(new Ball(width / 2 + (i - 2) * 50, height / 2, 20));\n    }\n}\n\nfunction animate() {\n    ctx.clearRect(0, 0, width, height);\n\n    // Draw support\n    ctx.beginPath();\n    ctx.moveTo(width / 2 - 150, height / 2 - 100);\n    ctx.lineTo(width / 2 + 150, height / 2 - 100);\n    ctx.strokeStyle = '#333';\n    ctx.lineWidth = 5;\n    ctx.stroke();\n\n    // Draw strings\n    ctx.beginPath();\n    for (let ball of balls) {\n        ctx.moveTo(ball.x, ball.y);\n        ctx.lineTo(ball.x, height / 2 - 100);\n    }\n    ctx.strokeStyle = '#999';\n    ctx.lineWidth = 2;\n    ctx.stroke();\n\n    // Update and draw balls\n    for (let ball of balls) {\n        if (ball !== draggingBall) {\n            ball.update();\n        }\n        ball.draw();\n    }\n\n    // Handle collisions\n    handleCollisions();\n\n    requestAnimationFrame(animate);\n}\n\nfunction handleCollisions() {\n    for (let i = 0; i \u003c balls.length - 1; i++) {\n        if (balls[i].x + balls[i].radius \u003e balls[i + 1].x - balls[i + 1].radius) {\n            let temp = balls[i].velocity;\n            balls[i].velocity = balls[i + 1].velocity;\n            balls[i + 1].velocity = temp;\n        }\n    }\n}\n\ncanvas.addEventListener('mousedown', (e) =\u003e {\n    mouseX = e.clientX;\n    mouseY = e.clientY;\n    for (let ball of [balls[0], balls[4]]) {\n        if (Math.hypot(mouseX - ball.x, mouseY - ball.y) \u003c ball.radius) {\n            draggingBall = ball;\n            break;\n        }\n    }\n});\n\ncanvas.addEventListener('mousemove', (e) =\u003e {\n    if (draggingBall) {\n        mouseX = e.clientX;\n        mouseY = e.clientY;\n        let dx = mouseX - width / 2;\n        let dy = mouseY - height / 2;\n        let angle = Math.atan2(dy, dx);\n        draggingBall.angle = angle;\n        draggingBall.x = width / 2 + Math.cos(angle) * 100;\n        draggingBall.y = height / 2 + Math.abs(Math.sin(angle) * 100);\n    }\n});\n\ncanvas.addEventListener('mouseup', () =\u003e {\n    if (draggingBall) {\n        draggingBall.velocity = 0;\n        draggingBall = null;\n    }\n});\n\nwindow.addEventListener('resize', init);\n\ninit();\nanimate();\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e",
            additional_notes:
              "This implementation creates an interactive Newton's cradle visualization using HTML5 Canvas and JavaScript. The user can interact with the leftmost and rightmost balls by clicking and dragging them. The physics simulation includes ball swinging, elastic collisions, and energy transfer. The visualization adapts to the browser window size and provides a minimal instruction for user interaction.",
            installation_commands: '',
          },
        },
        {
          model: 'anthropic/claude-3.5-sonnet',
          completion: {
            files: {
              'index.js': {
                content:
                  "// Newton's Cradle Visualization\n\nconst Engine = Matter.Engine,\n    Render = Matter.Render,\n    Runner = Matter.Runner,\n    Body = Matter.Body,\n    Composite = Matter.Composite,\n    Constraint = Matter.Constraint,\n    Bodies = Matter.Bodies,\n    Events = Matter.Events,\n    Mouse = Matter.Mouse,\n    MouseConstraint = Matter.MouseConstraint;\n\nconst engine = Engine.create(),\n    world = engine.world;\n\nconst canvas = document.getElementById('canvas');\nconst width = window.innerWidth;\nconst height = window.innerHeight;\n\nconst render = Render.create({\n    canvas: canvas,\n    engine: engine,\n    options: {\n        width: width,\n        height: height,\n        wireframes: false,\n        background: '#f0f0f0'\n    }\n});\n\nRender.run(render);\nconst runner = Runner.create();\nRunner.run(runner, engine);\n\n// Create Newton's Cradle\nconst cradle = Composite.create();\nconst ballRadius = 20;\nconst ballGap = 5;\nconst numBalls = 5;\nconst startX = width / 2 - ((numBalls - 1) * (ballRadius * 2 + ballGap)) / 2;\nconst startY = height / 2;\n\nconst balls = [];\nconst constraints = [];\n\nfor (let i = 0; i \u003c numBalls; i++) {\n    const ball = Bodies.circle(\n        startX + i * (ballRadius * 2 + ballGap),\n        startY + 100,\n        ballRadius,\n        {\n            inertia: Infinity,\n            restitution: 1,\n            friction: 0,\n            frictionAir: 0.0001,\n            slop: 1,\n            render: {\n                fillStyle: '#c0c0c0'\n            }\n        }\n    );\n    balls.push(ball);\n\n    const constraint = Constraint.create({\n        pointA: { x: startX + i * (ballRadius * 2 + ballGap), y: startY - 100 },\n        bodyB: ball,\n        length: 200,\n        stiffness: 1,\n        render: {\n            strokeStyle: '#222'\n        }\n    });\n    constraints.push(constraint);\n}\n\nComposite.add(cradle, [...balls, ...constraints]);\nComposite.add(world, cradle);\n\n// Add horizontal support\nconst support = Bodies.rectangle(width / 2, startY - 100, width / 2, 10, {\n    isStatic: true,\n    render: {\n        fillStyle: '#333'\n    }\n});\nComposite.add(world, support);\n\n// Mouse control\nconst mouse = Mouse.create(render.canvas);\nconst mouseConstraint = MouseConstraint.create(engine, {\n    mouse: mouse,\n    constraint: {\n        stiffness: 0.2,\n        render: {\n            visible: false\n        }\n    }\n});\nComposite.add(world, mouseConstraint);\n\n// Chaos mode\nlet chaosMode = false;\nconst chaosButton = document.getElementById('chaosButton');\nchaosButton.addEventListener('click', () =\u003e {\n    chaosMode = !chaosMode;\n    chaosButton.textContent = chaosMode ? 'Disable Chaos Mode' : 'Enable Chaos Mode';\n});\n\n// Color changing and energy calculation\nEvents.on(engine, 'afterUpdate', () =\u003e {\n    balls.forEach((ball, index) =\u003e {\n        const velocity = Math.sqrt(ball.velocity.x ** 2 + ball.velocity.y ** 2);\n        const maxVelocity = 5;\n        const normalizedVelocity = Math.min(velocity / maxVelocity, 1);\n        const color = interpolateColor('#c0c0c0', '#ff0000', normalizedVelocity);\n        ball.render.fillStyle = color;\n\n        // Calculate and update energies\n        const kineticEnergy = 0.5 * ball.mass * velocity ** 2;\n        const potentialEnergy = ball.mass * 9.81 * (height - ball.position.y);\n        updateEnergyGraph(index, kineticEnergy, potentialEnergy);\n\n        // Chaos mode\n        if (chaosMode \u0026\u0026 Math.random() \u003c 0.01) {\n            Body.applyForce(ball, ball.position, {\n                x: (Math.random() - 0.5) * 0.001,\n                y: (Math.random() - 0.5) * 0.001\n            });\n        }\n    });\n});\n\n// Helper function to interpolate colors\nfunction interpolateColor(color1, color2, factor) {\n    const r1 = parseInt(color1.substr(1, 2), 16);\n    const g1 = parseInt(color1.substr(3, 2), 16);\n    const b1 = parseInt(color1.substr(5, 2), 16);\n\n    const r2 = parseInt(color2.substr(1, 2), 16);\n    const g2 = parseInt(color2.substr(3, 2), 16);\n    const b2 = parseInt(color2.substr(5, 2), 16);\n\n    const r = Math.round(r1 + factor * (r2 - r1));\n    const g = Math.round(g1 + factor * (g2 - g1));\n    const b = Math.round(b1 + factor * (b2 - b1));\n\n    return `rgb(${r}, ${g}, ${b})`;\n}\n\n// Energy visualization\nconst energyGraphs = [];\n\nfunction createEnergyGraph(index) {\n    const graphCanvas = document.createElement('canvas');\n    graphCanvas.width = 200;\n    graphCanvas.height = 100;\n    graphCanvas.style.position = 'absolute';\n    graphCanvas.style.right = '10px';\n    graphCanvas.style.top = `${10 + index * 110}px`;\n    document.body.appendChild(graphCanvas);\n\n    return new Chart(graphCanvas, {\n        type: 'line',\n        data: {\n            labels: [],\n            datasets: [\n                {\n                    label: 'Kinetic Energy',\n                    data: [],\n                    borderColor: 'rgb(255, 99, 132)',\n                    tension: 0.1\n                },\n                {\n                    label: 'Potential Energy',\n                    data: [],\n                    borderColor: 'rgb(54, 162, 235)',\n                    tension: 0.1\n                }\n            ]\n        },\n        options: {\n            responsive: false,\n            scales: {\n                x: {\n                    type: 'linear',\n                    position: 'bottom',\n                    max: 100\n                },\n                y: {\n                    beginAtZero: true\n                }\n            }\n        }\n    });\n}\n\nfor (let i = 0; i \u003c numBalls; i++) {\n    energyGraphs.push(createEnergyGraph(i));\n}\n\nfunction updateEnergyGraph(ballIndex, kineticEnergy, potentialEnergy) {\n    const graph = energyGraphs[ballIndex];\n    const time = engine.timing.timestamp;\n\n    graph.data.labels.push(time);\n    graph.data.datasets[0].data.push(kineticEnergy);\n    graph.data.datasets[1].data.push(potentialEnergy);\n\n    if (graph.data.labels.length \u003e 100) {\n        graph.data.labels.shift();\n        graph.data.datasets[0].data.shift();\n        graph.data.datasets[1].data.shift();\n    }\n\n    graph.update();\n}\n\n// Resize canvas on window resize\nwindow.addEventListener('resize', () =\u003e {\n    width = window.innerWidth;\n    height = window.innerHeight;\n    render.canvas.width = width;\n    render.canvas.height = height;\n    Render.setPixelRatio(render, window.devicePixelRatio);\n});\n",
              },
              'index.html': {
                content:
                  '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003eNewton\'s Cradle Visualization\u003c/title\u003e\n    \u003cstyle\u003e\n        body {\n            margin: 0;\n            overflow: hidden;\n            background-color: #f0f0f0;\n        }\n        #canvas {\n            display: block;\n        }\n        #chaosButton {\n            position: absolute;\n            top: 10px;\n            left: 10px;\n            padding: 10px;\n            background-color: #4CAF50;\n            color: white;\n            border: none;\n            cursor: pointer;\n            font-size: 16px;\n        }\n        #chaosButton:hover {\n            background-color: #45a049;\n        }\n        #instructions {\n            position: absolute;\n            bottom: 10px;\n            left: 10px;\n            color: #333;\n            font-family: Arial, sans-serif;\n            font-size: 14px;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003ccanvas id="canvas"\u003e\u003c/canvas\u003e\n    \u003cbutton id="chaosButton"\u003eToggle Chaos Mode\u003c/button\u003e\n    \u003cdiv id="instructions"\u003eClick and drag a ball to interact. Toggle Chaos Mode for unpredictable behavior.\u003c/div\u003e\n    \u003cscript src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.18.0/matter.min.js"\u003e\u003c/script\u003e\n    \u003cscript src="https://cdn.jsdelivr.net/npm/chart.js"\u003e\u003c/script\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
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
            sandbox_url: 'https://d3c8xd.csb.app/',
            combined_html:
              "\u003c!DOCTYPE html\u003e\n\u003chtml lang=\"en\"\u003e\n\u003chead\u003e\n    \u003cmeta charset=\"UTF-8\"\u003e\n    \u003cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003e\n    \u003ctitle\u003eNewton's Cradle Visualization\u003c/title\u003e\n    \u003cstyle\u003e\n        body {\n            margin: 0;\n            overflow: hidden;\n            background-color: #f0f0f0;\n        }\n        #canvas {\n            display: block;\n        }\n        #chaosButton {\n            position: absolute;\n            top: 10px;\n            left: 10px;\n            padding: 10px;\n            background-color: #4CAF50;\n            color: white;\n            border: none;\n            cursor: pointer;\n            font-size: 16px;\n        }\n        #chaosButton:hover {\n            background-color: #45a049;\n        }\n        #instructions {\n            position: absolute;\n            bottom: 10px;\n            left: 10px;\n            color: #333;\n            font-family: Arial, sans-serif;\n            font-size: 14px;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003ccanvas id=\"canvas\"\u003e\u003c/canvas\u003e\n    \u003cbutton id=\"chaosButton\"\u003eToggle Chaos Mode\u003c/button\u003e\n    \u003cdiv id=\"instructions\"\u003eClick and drag a ball to interact. Toggle Chaos Mode for unpredictable behavior.\u003c/div\u003e\n    \u003cscript src=\"https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.18.0/matter.min.js\"\u003e\u003c/script\u003e\n    \u003cscript src=\"https://cdn.jsdelivr.net/npm/chart.js\"\u003e\u003c/script\u003e\n    \u003cscript src=\"index.js\"\u003e\u003c/script\u003e\n\u003cscript\u003e// Newton's Cradle Visualization\n\nconst Engine = Matter.Engine,\n    Render = Matter.Render,\n    Runner = Matter.Runner,\n    Body = Matter.Body,\n    Composite = Matter.Composite,\n    Constraint = Matter.Constraint,\n    Bodies = Matter.Bodies,\n    Events = Matter.Events,\n    Mouse = Matter.Mouse,\n    MouseConstraint = Matter.MouseConstraint;\n\nconst engine = Engine.create(),\n    world = engine.world;\n\nconst canvas = document.getElementById('canvas');\nconst width = window.innerWidth;\nconst height = window.innerHeight;\n\nconst render = Render.create({\n    canvas: canvas,\n    engine: engine,\n    options: {\n        width: width,\n        height: height,\n        wireframes: false,\n        background: '#f0f0f0'\n    }\n});\n\nRender.run(render);\nconst runner = Runner.create();\nRunner.run(runner, engine);\n\n// Create Newton's Cradle\nconst cradle = Composite.create();\nconst ballRadius = 20;\nconst ballGap = 5;\nconst numBalls = 5;\nconst startX = width / 2 - ((numBalls - 1) * (ballRadius * 2 + ballGap)) / 2;\nconst startY = height / 2;\n\nconst balls = [];\nconst constraints = [];\n\nfor (let i = 0; i \u003c numBalls; i++) {\n    const ball = Bodies.circle(\n        startX + i * (ballRadius * 2 + ballGap),\n        startY + 100,\n        ballRadius,\n        {\n            inertia: Infinity,\n            restitution: 1,\n            friction: 0,\n            frictionAir: 0.0001,\n            slop: 1,\n            render: {\n                fillStyle: '#c0c0c0'\n            }\n        }\n    );\n    balls.push(ball);\n\n    const constraint = Constraint.create({\n        pointA: { x: startX + i * (ballRadius * 2 + ballGap), y: startY - 100 },\n        bodyB: ball,\n        length: 200,\n        stiffness: 1,\n        render: {\n            strokeStyle: '#222'\n        }\n    });\n    constraints.push(constraint);\n}\n\nComposite.add(cradle, [...balls, ...constraints]);\nComposite.add(world, cradle);\n\n// Add horizontal support\nconst support = Bodies.rectangle(width / 2, startY - 100, width / 2, 10, {\n    isStatic: true,\n    render: {\n        fillStyle: '#333'\n    }\n});\nComposite.add(world, support);\n\n// Mouse control\nconst mouse = Mouse.create(render.canvas);\nconst mouseConstraint = MouseConstraint.create(engine, {\n    mouse: mouse,\n    constraint: {\n        stiffness: 0.2,\n        render: {\n            visible: false\n        }\n    }\n});\nComposite.add(world, mouseConstraint);\n\n// Chaos mode\nlet chaosMode = false;\nconst chaosButton = document.getElementById('chaosButton');\nchaosButton.addEventListener('click', () =\u003e {\n    chaosMode = !chaosMode;\n    chaosButton.textContent = chaosMode ? 'Disable Chaos Mode' : 'Enable Chaos Mode';\n});\n\n// Color changing and energy calculation\nEvents.on(engine, 'afterUpdate', () =\u003e {\n    balls.forEach((ball, index) =\u003e {\n        const velocity = Math.sqrt(ball.velocity.x ** 2 + ball.velocity.y ** 2);\n        const maxVelocity = 5;\n        const normalizedVelocity = Math.min(velocity / maxVelocity, 1);\n        const color = interpolateColor('#c0c0c0', '#ff0000', normalizedVelocity);\n        ball.render.fillStyle = color;\n\n        // Calculate and update energies\n        const kineticEnergy = 0.5 * ball.mass * velocity ** 2;\n        const potentialEnergy = ball.mass * 9.81 * (height - ball.position.y);\n        updateEnergyGraph(index, kineticEnergy, potentialEnergy);\n\n        // Chaos mode\n        if (chaosMode \u0026\u0026 Math.random() \u003c 0.01) {\n            Body.applyForce(ball, ball.position, {\n                x: (Math.random() - 0.5) * 0.001,\n                y: (Math.random() - 0.5) * 0.001\n            });\n        }\n    });\n});\n\n// Helper function to interpolate colors\nfunction interpolateColor(color1, color2, factor) {\n    const r1 = parseInt(color1.substr(1, 2), 16);\n    const g1 = parseInt(color1.substr(3, 2), 16);\n    const b1 = parseInt(color1.substr(5, 2), 16);\n\n    const r2 = parseInt(color2.substr(1, 2), 16);\n    const g2 = parseInt(color2.substr(3, 2), 16);\n    const b2 = parseInt(color2.substr(5, 2), 16);\n\n    const r = Math.round(r1 + factor * (r2 - r1));\n    const g = Math.round(g1 + factor * (g2 - g1));\n    const b = Math.round(b1 + factor * (b2 - b1));\n\n    return `rgb(${r}, ${g}, ${b})`;\n}\n\n// Energy visualization\nconst energyGraphs = [];\n\nfunction createEnergyGraph(index) {\n    const graphCanvas = document.createElement('canvas');\n    graphCanvas.width = 200;\n    graphCanvas.height = 100;\n    graphCanvas.style.position = 'absolute';\n    graphCanvas.style.right = '10px';\n    graphCanvas.style.top = `${10 + index * 110}px`;\n    document.body.appendChild(graphCanvas);\n\n    return new Chart(graphCanvas, {\n        type: 'line',\n        data: {\n            labels: [],\n            datasets: [\n                {\n                    label: 'Kinetic Energy',\n                    data: [],\n                    borderColor: 'rgb(255, 99, 132)',\n                    tension: 0.1\n                },\n                {\n                    label: 'Potential Energy',\n                    data: [],\n                    borderColor: 'rgb(54, 162, 235)',\n                    tension: 0.1\n                }\n            ]\n        },\n        options: {\n            responsive: false,\n            scales: {\n                x: {\n                    type: 'linear',\n                    position: 'bottom',\n                    max: 100\n                },\n                y: {\n                    beginAtZero: true\n                }\n            }\n        }\n    });\n}\n\nfor (let i = 0; i \u003c numBalls; i++) {\n    energyGraphs.push(createEnergyGraph(i));\n}\n\nfunction updateEnergyGraph(ballIndex, kineticEnergy, potentialEnergy) {\n    const graph = energyGraphs[ballIndex];\n    const time = engine.timing.timestamp;\n\n    graph.data.labels.push(time);\n    graph.data.datasets[0].data.push(kineticEnergy);\n    graph.data.datasets[1].data.push(potentialEnergy);\n\n    if (graph.data.labels.length \u003e 100) {\n        graph.data.labels.shift();\n        graph.data.datasets[0].data.shift();\n        graph.data.datasets[1].data.shift();\n    }\n\n    graph.update();\n}\n\n// Resize canvas on window resize\nwindow.addEventListener('resize', () =\u003e {\n    width = window.innerWidth;\n    height = window.innerHeight;\n    render.canvas.width = width;\n    render.canvas.height = height;\n    Render.setPixelRatio(render, window.devicePixelRatio);\n});\n\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e",
            additional_notes:
              "This solution uses Matter.js for physics simulation and Chart.js for energy visualization. The Newton's cradle is fully interactive, with color-changing balls, a chaos mode, and real-time energy graphs. Users can interact with the cradle by clicking and dragging the balls.",
            installation_commands: 'npm install matter-js chart.js',
          },
        },
        {
          model: 'anthropic/claude-3.5-sonnet',
          completion: {
            files: {
              'index.js': {
                content:
                  "const canvas = document.getElementById('pendulumCanvas');\nconst ctx = canvas.getContext('2d');\nconst speedSlider = document.getElementById('speedSlider');\n\ncanvas.width = 800;\ncanvas.height = 600;\n\nlet pivotX = canvas.width / 2;\nlet pivotY = 100;\nlet r1 = 150, r2 = 150;\nlet m1 = 10, m2 = 10;\nlet a1 = Math.PI / 2, a2 = Math.PI / 2;\nlet a1_v = 0, a2_v = 0;\nlet g = 9.81;\nlet isDragging = false;\nlet draggedPendulum = null;\n\nfunction drawPendulum() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n\n    // Draw background\n    ctx.fillStyle = '#e6f3ff';\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\n\n    // Draw pivot\n    ctx.fillStyle = '#4a4a4a';\n    ctx.beginPath();\n    ctx.arc(pivotX, pivotY, 5, 0, 2 * Math.PI);\n    ctx.fill();\n\n    // Calculate positions\n    let x1 = pivotX + r1 * Math.sin(a1);\n    let y1 = pivotY + r1 * Math.cos(a1);\n    let x2 = x1 + r2 * Math.sin(a2);\n    let y2 = y1 + r2 * Math.cos(a2);\n\n    // Draw rods\n    ctx.strokeStyle = '#8b4513';\n    ctx.lineWidth = 3;\n    ctx.beginPath();\n    ctx.moveTo(pivotX, pivotY);\n    ctx.lineTo(x1, y1);\n    ctx.lineTo(x2, y2);\n    ctx.stroke();\n\n    // Draw weights\n    ctx.fillStyle = '#d2691e';\n    ctx.beginPath();\n    ctx.arc(x1, y1, 15, 0, 2 * Math.PI);\n    ctx.fill();\n    ctx.beginPath();\n    ctx.arc(x2, y2, 15, 0, 2 * Math.PI);\n    ctx.fill();\n}\n\nfunction updatePendulum() {\n    let speed = parseFloat(speedSlider.value);\n\n    if (!isDragging) {\n        let num1 = -g * (2 * m1 + m2) * Math.sin(a1);\n        let num2 = -m2 * g * Math.sin(a1 - 2 * a2);\n        let num3 = -2 * Math.sin(a1 - a2) * m2;\n        let num4 = a2_v * a2_v * r2 + a1_v * a1_v * r1 * Math.cos(a1 - a2);\n        let den = r1 * (2 * m1 + m2 - m2 * Math.cos(2 * a1 - 2 * a2));\n        let a1_a = (num1 + num2 + num3 * num4) / den;\n\n        num1 = 2 * Math.sin(a1 - a2);\n        num2 = (a1_v * a1_v * r1 * (m1 + m2));\n        num3 = g * (m1 + m2) * Math.cos(a1);\n        num4 = a2_v * a2_v * r2 * m2 * Math.cos(a1 - a2);\n        den = r2 * (2 * m1 + m2 - m2 * Math.cos(2 * a1 - 2 * a2));\n        let a2_a = (num1 * (num2 + num3 + num4)) / den;\n\n        a1_v += a1_a * speed;\n        a2_v += a2_a * speed;\n        a1 += a1_v * speed;\n        a2 += a2_v * speed;\n    }\n\n    drawPendulum();\n    requestAnimationFrame(updatePendulum);\n}\n\nfunction startDragging(e) {\n    let rect = canvas.getBoundingClientRect();\n    let mouseX = e.clientX - rect.left;\n    let mouseY = e.clientY - rect.top;\n\n    let x1 = pivotX + r1 * Math.sin(a1);\n    let y1 = pivotY + r1 * Math.cos(a1);\n    let x2 = x1 + r2 * Math.sin(a2);\n    let y2 = y1 + r2 * Math.cos(a2);\n\n    let d1 = Math.sqrt((mouseX - x1) ** 2 + (mouseY - y1) ** 2);\n    let d2 = Math.sqrt((mouseX - x2) ** 2 + (mouseY - y2) ** 2);\n\n    if (d1 \u003c 20) {\n        isDragging = true;\n        draggedPendulum = 1;\n    } else if (d2 \u003c 20) {\n        isDragging = true;\n        draggedPendulum = 2;\n    }\n}\n\nfunction drag(e) {\n    if (isDragging) {\n        let rect = canvas.getBoundingClientRect();\n        let mouseX = e.clientX - rect.left;\n        let mouseY = e.clientY - rect.top;\n\n        if (draggedPendulum === 1) {\n            let dx = mouseX - pivotX;\n            let dy = mouseY - pivotY;\n            a1 = Math.atan2(dx, dy);\n            a1_v = 0;\n            a2_v = 0;\n        } else if (draggedPendulum === 2) {\n            let x1 = pivotX + r1 * Math.sin(a1);\n            let y1 = pivotY + r1 * Math.cos(a1);\n            let dx = mouseX - x1;\n            let dy = mouseY - y1;\n            a2 = Math.atan2(dx, dy);\n            a1_v = 0;\n            a2_v = 0;\n        }\n    }\n}\n\nfunction stopDragging() {\n    isDragging = false;\n    draggedPendulum = null;\n}\n\ncanvas.addEventListener('mousedown', startDragging);\ncanvas.addEventListener('mousemove', drag);\ncanvas.addEventListener('mouseup', stopDragging);\ncanvas.addEventListener('mouseout', stopDragging);\n\nupdatePendulum();\n\n// Instructions\nctx.fillStyle = 'rgba(0, 0, 0, 0.7)';\nctx.fillRect(10, 10, 280, 60);\nctx.fillStyle = 'white';\nctx.font = '14px Arial';\nctx.fillText('Click and drag either weight to move it.', 20, 30);\nctx.fillText('Use the slider to adjust simulation speed.', 20, 50);",
              },
              'index.html': {
                content:
                  '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003eDouble Pendulum Visualization\u003c/title\u003e\n    \u003cstyle\u003e\n        body {\n            margin: 0;\n            padding: 0;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 100vh;\n            background-color: #f0f0f0;\n        }\n        canvas {\n            border: 1px solid #ccc;\n        }\n        #speedSlider {\n            position: absolute;\n            bottom: 20px;\n            left: 50%;\n            transform: translateX(-50%);\n            width: 200px;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003ccanvas id="pendulumCanvas"\u003e\u003c/canvas\u003e\n    \u003cinput type="range" id="speedSlider" min="0.1" max="2" step="0.1" value="1"\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
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
            sandbox_url: 'https://xpwp2w.csb.app/',
            combined_html:
              "\u003c!DOCTYPE html\u003e\n\u003chtml lang=\"en\"\u003e\n\u003chead\u003e\n    \u003cmeta charset=\"UTF-8\"\u003e\n    \u003cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003e\n    \u003ctitle\u003eDouble Pendulum Visualization\u003c/title\u003e\n    \u003cstyle\u003e\n        body {\n            margin: 0;\n            padding: 0;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 100vh;\n            background-color: #f0f0f0;\n        }\n        canvas {\n            border: 1px solid #ccc;\n        }\n        #speedSlider {\n            position: absolute;\n            bottom: 20px;\n            left: 50%;\n            transform: translateX(-50%);\n            width: 200px;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003ccanvas id=\"pendulumCanvas\"\u003e\u003c/canvas\u003e\n    \u003cinput type=\"range\" id=\"speedSlider\" min=\"0.1\" max=\"2\" step=\"0.1\" value=\"1\"\u003e\n    \u003cscript src=\"index.js\"\u003e\u003c/script\u003e\n\u003cscript\u003econst canvas = document.getElementById('pendulumCanvas');\nconst ctx = canvas.getContext('2d');\nconst speedSlider = document.getElementById('speedSlider');\n\ncanvas.width = 800;\ncanvas.height = 600;\n\nlet pivotX = canvas.width / 2;\nlet pivotY = 100;\nlet r1 = 150, r2 = 150;\nlet m1 = 10, m2 = 10;\nlet a1 = Math.PI / 2, a2 = Math.PI / 2;\nlet a1_v = 0, a2_v = 0;\nlet g = 9.81;\nlet isDragging = false;\nlet draggedPendulum = null;\n\nfunction drawPendulum() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n\n    // Draw background\n    ctx.fillStyle = '#e6f3ff';\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\n\n    // Draw pivot\n    ctx.fillStyle = '#4a4a4a';\n    ctx.beginPath();\n    ctx.arc(pivotX, pivotY, 5, 0, 2 * Math.PI);\n    ctx.fill();\n\n    // Calculate positions\n    let x1 = pivotX + r1 * Math.sin(a1);\n    let y1 = pivotY + r1 * Math.cos(a1);\n    let x2 = x1 + r2 * Math.sin(a2);\n    let y2 = y1 + r2 * Math.cos(a2);\n\n    // Draw rods\n    ctx.strokeStyle = '#8b4513';\n    ctx.lineWidth = 3;\n    ctx.beginPath();\n    ctx.moveTo(pivotX, pivotY);\n    ctx.lineTo(x1, y1);\n    ctx.lineTo(x2, y2);\n    ctx.stroke();\n\n    // Draw weights\n    ctx.fillStyle = '#d2691e';\n    ctx.beginPath();\n    ctx.arc(x1, y1, 15, 0, 2 * Math.PI);\n    ctx.fill();\n    ctx.beginPath();\n    ctx.arc(x2, y2, 15, 0, 2 * Math.PI);\n    ctx.fill();\n}\n\nfunction updatePendulum() {\n    let speed = parseFloat(speedSlider.value);\n\n    if (!isDragging) {\n        let num1 = -g * (2 * m1 + m2) * Math.sin(a1);\n        let num2 = -m2 * g * Math.sin(a1 - 2 * a2);\n        let num3 = -2 * Math.sin(a1 - a2) * m2;\n        let num4 = a2_v * a2_v * r2 + a1_v * a1_v * r1 * Math.cos(a1 - a2);\n        let den = r1 * (2 * m1 + m2 - m2 * Math.cos(2 * a1 - 2 * a2));\n        let a1_a = (num1 + num2 + num3 * num4) / den;\n\n        num1 = 2 * Math.sin(a1 - a2);\n        num2 = (a1_v * a1_v * r1 * (m1 + m2));\n        num3 = g * (m1 + m2) * Math.cos(a1);\n        num4 = a2_v * a2_v * r2 * m2 * Math.cos(a1 - a2);\n        den = r2 * (2 * m1 + m2 - m2 * Math.cos(2 * a1 - 2 * a2));\n        let a2_a = (num1 * (num2 + num3 + num4)) / den;\n\n        a1_v += a1_a * speed;\n        a2_v += a2_a * speed;\n        a1 += a1_v * speed;\n        a2 += a2_v * speed;\n    }\n\n    drawPendulum();\n    requestAnimationFrame(updatePendulum);\n}\n\nfunction startDragging(e) {\n    let rect = canvas.getBoundingClientRect();\n    let mouseX = e.clientX - rect.left;\n    let mouseY = e.clientY - rect.top;\n\n    let x1 = pivotX + r1 * Math.sin(a1);\n    let y1 = pivotY + r1 * Math.cos(a1);\n    let x2 = x1 + r2 * Math.sin(a2);\n    let y2 = y1 + r2 * Math.cos(a2);\n\n    let d1 = Math.sqrt((mouseX - x1) ** 2 + (mouseY - y1) ** 2);\n    let d2 = Math.sqrt((mouseX - x2) ** 2 + (mouseY - y2) ** 2);\n\n    if (d1 \u003c 20) {\n        isDragging = true;\n        draggedPendulum = 1;\n    } else if (d2 \u003c 20) {\n        isDragging = true;\n        draggedPendulum = 2;\n    }\n}\n\nfunction drag(e) {\n    if (isDragging) {\n        let rect = canvas.getBoundingClientRect();\n        let mouseX = e.clientX - rect.left;\n        let mouseY = e.clientY - rect.top;\n\n        if (draggedPendulum === 1) {\n            let dx = mouseX - pivotX;\n            let dy = mouseY - pivotY;\n            a1 = Math.atan2(dx, dy);\n            a1_v = 0;\n            a2_v = 0;\n        } else if (draggedPendulum === 2) {\n            let x1 = pivotX + r1 * Math.sin(a1);\n            let y1 = pivotY + r1 * Math.cos(a1);\n            let dx = mouseX - x1;\n            let dy = mouseY - y1;\n            a2 = Math.atan2(dx, dy);\n            a1_v = 0;\n            a2_v = 0;\n        }\n    }\n}\n\nfunction stopDragging() {\n    isDragging = false;\n    draggedPendulum = null;\n}\n\ncanvas.addEventListener('mousedown', startDragging);\ncanvas.addEventListener('mousemove', drag);\ncanvas.addEventListener('mouseup', stopDragging);\ncanvas.addEventListener('mouseout', stopDragging);\n\nupdatePendulum();\n\n// Instructions\nctx.fillStyle = 'rgba(0, 0, 0, 0.7)';\nctx.fillRect(10, 10, 280, 60);\nctx.fillStyle = 'white';\nctx.font = '14px Arial';\nctx.fillText('Click and drag either weight to move it.', 20, 30);\nctx.fillText('Use the slider to adjust simulation speed.', 20, 50);\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e",
            additional_notes:
              'This implementation creates an interactive double pendulum visualization using HTML5 canvas and JavaScript. The user can interact with the pendulum by clicking and dragging either of the weights, and adjust the simulation speed using a slider. The physics simulation is based on the equations of motion for a double pendulum system. The background is set to a light blue color to provide a pleasing visual context, and the pendulum components are styled to resemble wooden rods and weights.',
            installation_commands: 'No installation commands required. This solution uses vanilla JavaScript and HTML.',
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
    taskId: '7f612041-4d80-4bf1-9e2c-7a1d2dea47ad',
    title: 'LLM Code Generation Task',
    body: "Create an interactive visualization of a tornado using JavaScript, HTML, and CSS. The scene should depict a rural landscape with a menacing tornado in the center. The tornado should be represented as a swirling, cone-shaped vortex extending from the ground up into dark storm clouds above. The landscape should include simple representations of fields, scattered trees, and a few small buildings or houses to provide scale and context.\n\nRequirements:\n\n1. The tornado should continuously rotate and undulate, giving the impression of a powerful, swirling wind funnel.\n\n2. Implement debris particles that circle around the base of the tornado, representing objects caught in its powerful winds.\n\n3. Create a simple lighting effect to simulate occasional flashes of lightning in the background storm clouds.\n\n4. Allow the user to click and drag anywhere on the screen to change the direction and speed of the tornado's movement across the landscape. The tornado should move smoothly in the direction of the drag, with the speed determined by the length of the drag action.\nNote:\n- The visualization should be implemented in JavaScript with HTML and CSS.\n- Ensure that the output has both index.js and index.html files\n",
    expireAt: '2025-09-10T04:46:34Z',
    type: 'CODE_GENERATION',
    taskData: {
      task: 'CODE_GENERATION',
      prompt:
        "Create an interactive visualization of a tornado using JavaScript, HTML, and CSS. The scene should depict a rural landscape with a menacing tornado in the center. The tornado should be represented as a swirling, cone-shaped vortex extending from the ground up into dark storm clouds above. The landscape should include simple representations of fields, scattered trees, and a few small buildings or houses to provide scale and context.\n\nRequirements:\n\n1. The tornado should continuously rotate and undulate, giving the impression of a powerful, swirling wind funnel.\n\n2. Implement debris particles that circle around the base of the tornado, representing objects caught in its powerful winds.\n\n3. Create a simple lighting effect to simulate occasional flashes of lightning in the background storm clouds.\n\n4. Allow the user to click and drag anywhere on the screen to change the direction and speed of the tornado's movement across the landscape. The tornado should move smoothly in the direction of the drag, with the speed determined by the length of the drag action.\nNote:\n- The visualization should be implemented in JavaScript with HTML and CSS.\n- Ensure that the output has both index.js and index.html files\n",
      criteria: [
        {
          max: 100,
          min: 1,
          type: 'multi-score',
          options: ['anthropic/claude-3.5-sonnet', 'anthropic/claude-3.5-sonnet'],
        },
      ],
      responses: [
        {
          model: 'anthropic/claude-3.5-sonnet',
          completion: {
            files: {
              'index.js': {
                content:
                  "let scene, camera, renderer, tornado, debris, clouds, landscape;\nlet isDragging = false;\nlet dragStartPosition = new THREE.Vector2();\nlet tornadoVelocity = new THREE.Vector2();\n\nfunction init() {\n    scene = new THREE.Scene();\n    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n    camera.position.set(0, 5, 20);\n    camera.lookAt(0, 0, 0);\n\n    renderer = new THREE.WebGLRenderer();\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    document.body.appendChild(renderer.domElement);\n\n    createLandscape();\n    createTornado();\n    createDebris();\n    createClouds();\n    createLighting();\n\n    window.addEventListener('resize', onWindowResize);\n    renderer.domElement.addEventListener('mousedown', onMouseDown);\n    renderer.domElement.addEventListener('mousemove', onMouseMove);\n    renderer.domElement.addEventListener('mouseup', onMouseUp);\n\n    animate();\n}\n\nfunction createLandscape() {\n    landscape = new THREE.Group();\n\n    // Ground\n    const groundGeometry = new THREE.PlaneGeometry(100, 100);\n    const groundMaterial = new THREE.MeshPhongMaterial({ color: 0x4CAF50 });\n    const ground = new THREE.Mesh(groundGeometry, groundMaterial);\n    ground.rotation.x = -Math.PI / 2;\n    landscape.add(ground);\n\n    // Trees\n    for (let i = 0; i \u003c 50; i++) {\n        const treeGeometry = new THREE.ConeGeometry(0.5, 2, 8);\n        const treeMaterial = new THREE.MeshPhongMaterial({ color: 0x33691E });\n        const tree = new THREE.Mesh(treeGeometry, treeMaterial);\n        tree.position.set(\n            Math.random() * 80 - 40,\n            1,\n            Math.random() * 80 - 40\n        );\n        landscape.add(tree);\n    }\n\n    // Houses\n    for (let i = 0; i \u003c 10; i++) {\n        const house = new THREE.Group();\n\n        const baseGeometry = new THREE.BoxGeometry(2, 2, 2);\n        const baseMaterial = new THREE.MeshPhongMaterial({ color: 0xE0E0E0 });\n        const base = new THREE.Mesh(baseGeometry, baseMaterial);\n        house.add(base);\n\n        const roofGeometry = new THREE.ConeGeometry(1.5, 1, 4);\n        const roofMaterial = new THREE.MeshPhongMaterial({ color: 0x795548 });\n        const roof = new THREE.Mesh(roofGeometry, roofMaterial);\n        roof.position.y = 1.5;\n        roof.rotation.y = Math.PI / 4;\n        house.add(roof);\n\n        house.position.set(\n            Math.random() * 80 - 40,\n            1,\n            Math.random() * 80 - 40\n        );\n        landscape.add(house);\n    }\n\n    scene.add(landscape);\n}\n\nfunction createTornado() {\n    const tornadoGeometry = new THREE.ConeGeometry(2, 15, 32, 1, true);\n    const tornadoMaterial = new THREE.MeshPhongMaterial({\n        color: 0x607D8B,\n        transparent: true,\n        opacity: 0.8,\n        side: THREE.DoubleSide\n    });\n    tornado = new THREE.Mesh(tornadoGeometry, tornadoMaterial);\n    tornado.position.y = 7.5;\n    scene.add(tornado);\n}\n\nfunction createDebris() {\n    debris = new THREE.Group();\n    const debrisGeometry = new THREE.SphereGeometry(0.1, 8, 8);\n    const debrisMaterial = new THREE.MeshPhongMaterial({ color: 0x795548 });\n\n    for (let i = 0; i \u003c 100; i++) {\n        const particle = new THREE.Mesh(debrisGeometry, debrisMaterial);\n        particle.position.set(\n            (Math.random() - 0.5) * 4,\n            Math.random() * 15,\n            (Math.random() - 0.5) * 4\n        );\n        debris.add(particle);\n    }\n\n    scene.add(debris);\n}\n\nfunction createClouds() {\n    clouds = new THREE.Group();\n    const cloudGeometry = new THREE.SphereGeometry(2, 16, 16);\n    const cloudMaterial = new THREE.MeshPhongMaterial({\n        color: 0x424242,\n        transparent: true,\n        opacity: 0.8\n    });\n\n    for (let i = 0; i \u003c 20; i++) {\n        const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial);\n        cloud.position.set(\n            (Math.random() - 0.5) * 40,\n            15 + Math.random() * 5,\n            (Math.random() - 0.5) * 40\n        );\n        cloud.scale.set(\n            1 + Math.random(),\n            0.5 + Math.random() * 0.5,\n            1 + Math.random()\n        );\n        clouds.add(cloud);\n    }\n\n    scene.add(clouds);\n}\n\nfunction createLighting() {\n    const ambientLight = new THREE.AmbientLight(0x404040);\n    scene.add(ambientLight);\n\n    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);\n    directionalLight.position.set(1, 1, 1);\n    scene.add(directionalLight);\n}\n\nfunction onWindowResize() {\n    camera.aspect = window.innerWidth / window.innerHeight;\n    camera.updateProjectionMatrix();\n    renderer.setSize(window.innerWidth, window.innerHeight);\n}\n\nfunction onMouseDown(event) {\n    isDragging = true;\n    dragStartPosition.set(event.clientX, event.clientY);\n}\n\nfunction onMouseMove(event) {\n    if (isDragging) {\n        const dragEndPosition = new THREE.Vector2(event.clientX, event.clientY);\n        const dragDelta = dragEndPosition.sub(dragStartPosition);\n        tornadoVelocity.set(dragDelta.x * 0.01, -dragDelta.y * 0.01);\n        dragStartPosition.set(event.clientX, event.clientY);\n    }\n}\n\nfunction onMouseUp() {\n    isDragging = false;\n}\n\nfunction animate() {\n    requestAnimationFrame(animate);\n\n    // Rotate and undulate tornado\n    tornado.rotation.y += 0.05;\n    tornado.scale.y = 1 + Math.sin(Date.now() * 0.002) * 0.1;\n\n    // Move tornado\n    tornado.position.x += tornadoVelocity.x;\n    tornado.position.z += tornadoVelocity.y;\n    tornadoVelocity.multiplyScalar(0.95); // Apply friction\n\n    // Rotate debris around tornado\n    debris.rotation.y += 0.03;\n    debris.position.copy(tornado.position);\n\n    // Simulate lightning\n    if (Math.random() \u003c 0.01) {\n        const flash = new THREE.PointLight(0xffffff, 1, 100);\n        flash.position.set(\n            tornado.position.x + (Math.random() - 0.5) * 20,\n            20,\n            tornado.position.z + (Math.random() - 0.5) * 20\n        );\n        scene.add(flash);\n        setTimeout(() =\u003e scene.remove(flash), 50 + Math.random() * 50);\n    }\n\n    renderer.render(scene, camera);\n}\n\ninit();",
              },
              'index.html': {
                content:
                  '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003eInteractive Tornado Visualization\u003c/title\u003e\n    \u003cstyle\u003e\n        body { margin: 0; overflow: hidden; }\n        canvas { display: block; }\n        #instructions {\n            position: absolute;\n            top: 10px;\n            left: 10px;\n            color: white;\n            font-family: Arial, sans-serif;\n            font-size: 14px;\n            background-color: rgba(0, 0, 0, 0.5);\n            padding: 10px;\n            border-radius: 5px;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv id="instructions"\u003eClick and drag to move the tornado\u003c/div\u003e\n    \u003cscript src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"\u003e\u003c/script\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
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
            sandbox_url: 'https://l4zz64.csb.app/',
            combined_html:
              '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003eInteractive Tornado Visualization\u003c/title\u003e\n    \u003cstyle\u003e\n        body { margin: 0; overflow: hidden; }\n        canvas { display: block; }\n        #instructions {\n            position: absolute;\n            top: 10px;\n            left: 10px;\n            color: white;\n            font-family: Arial, sans-serif;\n            font-size: 14px;\n            background-color: rgba(0, 0, 0, 0.5);\n            padding: 10px;\n            border-radius: 5px;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv id="instructions"\u003eClick and drag to move the tornado\u003c/div\u003e\n    \u003cscript src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"\u003e\u003c/script\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003cscript\u003elet scene, camera, renderer, tornado, debris, clouds, landscape;\nlet isDragging = false;\nlet dragStartPosition = new THREE.Vector2();\nlet tornadoVelocity = new THREE.Vector2();\n\nfunction init() {\n    scene = new THREE.Scene();\n    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n    camera.position.set(0, 5, 20);\n    camera.lookAt(0, 0, 0);\n\n    renderer = new THREE.WebGLRenderer();\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    document.body.appendChild(renderer.domElement);\n\n    createLandscape();\n    createTornado();\n    createDebris();\n    createClouds();\n    createLighting();\n\n    window.addEventListener(\'resize\', onWindowResize);\n    renderer.domElement.addEventListener(\'mousedown\', onMouseDown);\n    renderer.domElement.addEventListener(\'mousemove\', onMouseMove);\n    renderer.domElement.addEventListener(\'mouseup\', onMouseUp);\n\n    animate();\n}\n\nfunction createLandscape() {\n    landscape = new THREE.Group();\n\n    // Ground\n    const groundGeometry = new THREE.PlaneGeometry(100, 100);\n    const groundMaterial = new THREE.MeshPhongMaterial({ color: 0x4CAF50 });\n    const ground = new THREE.Mesh(groundGeometry, groundMaterial);\n    ground.rotation.x = -Math.PI / 2;\n    landscape.add(ground);\n\n    // Trees\n    for (let i = 0; i \u003c 50; i++) {\n        const treeGeometry = new THREE.ConeGeometry(0.5, 2, 8);\n        const treeMaterial = new THREE.MeshPhongMaterial({ color: 0x33691E });\n        const tree = new THREE.Mesh(treeGeometry, treeMaterial);\n        tree.position.set(\n            Math.random() * 80 - 40,\n            1,\n            Math.random() * 80 - 40\n        );\n        landscape.add(tree);\n    }\n\n    // Houses\n    for (let i = 0; i \u003c 10; i++) {\n        const house = new THREE.Group();\n\n        const baseGeometry = new THREE.BoxGeometry(2, 2, 2);\n        const baseMaterial = new THREE.MeshPhongMaterial({ color: 0xE0E0E0 });\n        const base = new THREE.Mesh(baseGeometry, baseMaterial);\n        house.add(base);\n\n        const roofGeometry = new THREE.ConeGeometry(1.5, 1, 4);\n        const roofMaterial = new THREE.MeshPhongMaterial({ color: 0x795548 });\n        const roof = new THREE.Mesh(roofGeometry, roofMaterial);\n        roof.position.y = 1.5;\n        roof.rotation.y = Math.PI / 4;\n        house.add(roof);\n\n        house.position.set(\n            Math.random() * 80 - 40,\n            1,\n            Math.random() * 80 - 40\n        );\n        landscape.add(house);\n    }\n\n    scene.add(landscape);\n}\n\nfunction createTornado() {\n    const tornadoGeometry = new THREE.ConeGeometry(2, 15, 32, 1, true);\n    const tornadoMaterial = new THREE.MeshPhongMaterial({\n        color: 0x607D8B,\n        transparent: true,\n        opacity: 0.8,\n        side: THREE.DoubleSide\n    });\n    tornado = new THREE.Mesh(tornadoGeometry, tornadoMaterial);\n    tornado.position.y = 7.5;\n    scene.add(tornado);\n}\n\nfunction createDebris() {\n    debris = new THREE.Group();\n    const debrisGeometry = new THREE.SphereGeometry(0.1, 8, 8);\n    const debrisMaterial = new THREE.MeshPhongMaterial({ color: 0x795548 });\n\n    for (let i = 0; i \u003c 100; i++) {\n        const particle = new THREE.Mesh(debrisGeometry, debrisMaterial);\n        particle.position.set(\n            (Math.random() - 0.5) * 4,\n            Math.random() * 15,\n            (Math.random() - 0.5) * 4\n        );\n        debris.add(particle);\n    }\n\n    scene.add(debris);\n}\n\nfunction createClouds() {\n    clouds = new THREE.Group();\n    const cloudGeometry = new THREE.SphereGeometry(2, 16, 16);\n    const cloudMaterial = new THREE.MeshPhongMaterial({\n        color: 0x424242,\n        transparent: true,\n        opacity: 0.8\n    });\n\n    for (let i = 0; i \u003c 20; i++) {\n        const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial);\n        cloud.position.set(\n            (Math.random() - 0.5) * 40,\n            15 + Math.random() * 5,\n            (Math.random() - 0.5) * 40\n        );\n        cloud.scale.set(\n            1 + Math.random(),\n            0.5 + Math.random() * 0.5,\n            1 + Math.random()\n        );\n        clouds.add(cloud);\n    }\n\n    scene.add(clouds);\n}\n\nfunction createLighting() {\n    const ambientLight = new THREE.AmbientLight(0x404040);\n    scene.add(ambientLight);\n\n    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);\n    directionalLight.position.set(1, 1, 1);\n    scene.add(directionalLight);\n}\n\nfunction onWindowResize() {\n    camera.aspect = window.innerWidth / window.innerHeight;\n    camera.updateProjectionMatrix();\n    renderer.setSize(window.innerWidth, window.innerHeight);\n}\n\nfunction onMouseDown(event) {\n    isDragging = true;\n    dragStartPosition.set(event.clientX, event.clientY);\n}\n\nfunction onMouseMove(event) {\n    if (isDragging) {\n        const dragEndPosition = new THREE.Vector2(event.clientX, event.clientY);\n        const dragDelta = dragEndPosition.sub(dragStartPosition);\n        tornadoVelocity.set(dragDelta.x * 0.01, -dragDelta.y * 0.01);\n        dragStartPosition.set(event.clientX, event.clientY);\n    }\n}\n\nfunction onMouseUp() {\n    isDragging = false;\n}\n\nfunction animate() {\n    requestAnimationFrame(animate);\n\n    // Rotate and undulate tornado\n    tornado.rotation.y += 0.05;\n    tornado.scale.y = 1 + Math.sin(Date.now() * 0.002) * 0.1;\n\n    // Move tornado\n    tornado.position.x += tornadoVelocity.x;\n    tornado.position.z += tornadoVelocity.y;\n    tornadoVelocity.multiplyScalar(0.95); // Apply friction\n\n    // Rotate debris around tornado\n    debris.rotation.y += 0.03;\n    debris.position.copy(tornado.position);\n\n    // Simulate lightning\n    if (Math.random() \u003c 0.01) {\n        const flash = new THREE.PointLight(0xffffff, 1, 100);\n        flash.position.set(\n            tornado.position.x + (Math.random() - 0.5) * 20,\n            20,\n            tornado.position.z + (Math.random() - 0.5) * 20\n        );\n        scene.add(flash);\n        setTimeout(() =\u003e scene.remove(flash), 50 + Math.random() * 50);\n    }\n\n    renderer.render(scene, camera);\n}\n\ninit();\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e',
            additional_notes:
              "This implementation creates an interactive 3D visualization of a tornado using Three.js. The scene includes a rural landscape with fields, trees, and houses, and a central tornado that rotates and undulates. Debris particles circle the base of the tornado, and lightning flashes occur randomly in the storm clouds. Users can click and drag to change the direction and speed of the tornado's movement across the landscape. The visualization is responsive and should work in most modern web browsers without requiring any additional installation steps.",
            installation_commands: '',
          },
        },
        {
          model: 'anthropic/claude-3.5-sonnet',
          completion: {
            files: {
              'index.js': {
                content:
                  "let scene, camera, renderer, tornado, debris, clouds, lightning;\n\nfunction init() {\n    scene = new THREE.Scene();\n    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n    renderer = new THREE.WebGLRenderer();\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    document.body.appendChild(renderer.domElement);\n\n    camera.position.set(0, 5, 20);\n    const controls = new THREE.OrbitControls(camera, renderer.domElement);\n    controls.enableDamping = true;\n    controls.dampingFactor = 0.05;\n\n    createSkybox();\n    createGround();\n    createTornado();\n    createDebris();\n    createClouds();\n    createLightning();\n    createScenery();\n\n    window.addEventListener('resize', onWindowResize, false);\n\n    animate();\n}\n\nfunction createSkybox() {\n    const skyGeometry = new THREE.BoxGeometry(1000, 1000, 1000);\n    const skyMaterial = new THREE.MeshBasicMaterial({ color: 0x4a4a4a, side: THREE.BackSide });\n    const skybox = new THREE.Mesh(skyGeometry, skyMaterial);\n    scene.add(skybox);\n}\n\nfunction createGround() {\n    const groundGeometry = new THREE.PlaneGeometry(100, 100);\n    const groundMaterial = new THREE.MeshPhongMaterial({ color: 0x3a9d23 });\n    const ground = new THREE.Mesh(groundGeometry, groundMaterial);\n    ground.rotation.x = -Math.PI / 2;\n    scene.add(ground);\n}\n\nfunction createTornado() {\n    const tornadoGeometry = new THREE.ConeGeometry(2, 20, 32);\n    const tornadoMaterial = new THREE.MeshPhongMaterial({ color: 0x666666, transparent: true, opacity: 0.8 });\n    tornado = new THREE.Mesh(tornadoGeometry, tornadoMaterial);\n    tornado.position.set(0, 10, 0);\n    scene.add(tornado);\n}\n\nfunction createDebris() {\n    debris = new THREE.Group();\n    for (let i = 0; i \u003c 50; i++) {\n        const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);\n        const material = new THREE.MeshPhongMaterial({ color: 0x8b4513 });\n        const particle = new THREE.Mesh(geometry, material);\n        particle.position.set(\n            (Math.random() - 0.5) * 4,\n            Math.random() * 20,\n            (Math.random() - 0.5) * 4\n        );\n        debris.add(particle);\n    }\n    scene.add(debris);\n}\n\nfunction createClouds() {\n    clouds = new THREE.Group();\n    for (let i = 0; i \u003c 20; i++) {\n        const cloudGeometry = new THREE.SphereGeometry(2, 16, 16);\n        const cloudMaterial = new THREE.MeshPhongMaterial({ color: 0x444444, transparent: true, opacity: 0.8 });\n        const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial);\n        cloud.position.set(\n            (Math.random() - 0.5) * 40,\n            20 + Math.random() * 10,\n            (Math.random() - 0.5) * 40\n        );\n        cloud.scale.set(1 + Math.random(), 0.8 + Math.random() * 0.4, 1 + Math.random());\n        clouds.add(cloud);\n    }\n    scene.add(clouds);\n}\n\nfunction createLightning() {\n    lightning = new THREE.PointLight(0xffffff, 0, 100);\n    lightning.position.set(0, 30, 0);\n    scene.add(lightning);\n}\n\nfunction createScenery() {\n    // Trees\n    for (let i = 0; i \u003c 20; i++) {\n        const treeGeometry = new THREE.ConeGeometry(1, 4, 8);\n        const treeMaterial = new THREE.MeshPhongMaterial({ color: 0x2d4c1e });\n        const tree = new THREE.Mesh(treeGeometry, treeMaterial);\n        tree.position.set(\n            (Math.random() - 0.5) * 80,\n            2,\n            (Math.random() - 0.5) * 80\n        );\n        scene.add(tree);\n    }\n\n    // Houses\n    for (let i = 0; i \u003c 5; i++) {\n        const houseGroup = new THREE.Group();\n\n        const baseGeometry = new THREE.BoxGeometry(3, 2, 3);\n        const baseMaterial = new THREE.MeshPhongMaterial({ color: 0xd2b48c });\n        const base = new THREE.Mesh(baseGeometry, baseMaterial);\n        houseGroup.add(base);\n\n        const roofGeometry = new THREE.ConeGeometry(2.5, 1.5, 4);\n        const roofMaterial = new THREE.MeshPhongMaterial({ color: 0x8b4513 });\n        const roof = new THREE.Mesh(roofGeometry, roofMaterial);\n        roof.position.y = 1.75;\n        roof.rotation.y = Math.PI / 4;\n        houseGroup.add(roof);\n\n        houseGroup.position.set(\n            (Math.random() - 0.5) * 60,\n            1,\n            (Math.random() - 0.5) * 60\n        );\n        scene.add(houseGroup);\n    }\n}\n\nfunction onWindowResize() {\n    camera.aspect = window.innerWidth / window.innerHeight;\n    camera.updateProjectionMatrix();\n    renderer.setSize(window.innerWidth, window.innerHeight);\n}\n\nfunction animate() {\n    requestAnimationFrame(animate);\n\n    tornado.rotation.y += 0.05;\n    tornado.scale.y = 1 + Math.sin(Date.now() * 0.001) * 0.1;\n\n    debris.children.forEach((particle) =\u003e {\n        particle.position.applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.1);\n        particle.position.y = (particle.position.y + 0.1) % 20;\n    });\n\n    if (Math.random() \u003c 0.03) {\n        lightning.intensity = 1;\n        setTimeout(() =\u003e {\n            lightning.intensity = 0;\n        }, 100);\n    }\n\n    renderer.render(scene, camera);\n}\n\ninit();",
              },
              'index.html': {
                content:
                  '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003eInteractive Tornado Visualization\u003c/title\u003e\n    \u003cstyle\u003e\n        body { margin: 0; overflow: hidden; }\n        canvas { display: block; }\n        #instructions {\n            position: absolute;\n            top: 10px;\n            left: 10px;\n            color: white;\n            font-family: Arial, sans-serif;\n            font-size: 14px;\n            background-color: rgba(0, 0, 0, 0.5);\n            padding: 10px;\n            border-radius: 5px;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv id="instructions"\u003eUse mouse to look around\u003c/div\u003e\n    \u003cscript src="https://unpkg.com/three@0.139.2/build/three.min.js"\u003e\u003c/script\u003e\n    \u003cscript src="https://unpkg.com/three@0.139.2/examples/js/controls/OrbitControls.js"\u003e\u003c/script\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003c/body\u003e\n\u003c/html\u003e',
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
            sandbox_url: 'https://vhrrdv.csb.app/',
            combined_html:
              '\u003c!DOCTYPE html\u003e\n\u003chtml lang="en"\u003e\n\u003chead\u003e\n    \u003cmeta charset="UTF-8"\u003e\n    \u003cmeta name="viewport" content="width=device-width, initial-scale=1.0"\u003e\n    \u003ctitle\u003eInteractive Tornado Visualization\u003c/title\u003e\n    \u003cstyle\u003e\n        body { margin: 0; overflow: hidden; }\n        canvas { display: block; }\n        #instructions {\n            position: absolute;\n            top: 10px;\n            left: 10px;\n            color: white;\n            font-family: Arial, sans-serif;\n            font-size: 14px;\n            background-color: rgba(0, 0, 0, 0.5);\n            padding: 10px;\n            border-radius: 5px;\n        }\n    \u003c/style\u003e\n\u003c/head\u003e\n\u003cbody\u003e\n    \u003cdiv id="instructions"\u003eUse mouse to look around\u003c/div\u003e\n    \u003cscript src="https://unpkg.com/three@0.139.2/build/three.min.js"\u003e\u003c/script\u003e\n    \u003cscript src="https://unpkg.com/three@0.139.2/examples/js/controls/OrbitControls.js"\u003e\u003c/script\u003e\n    \u003cscript src="index.js"\u003e\u003c/script\u003e\n\u003cscript\u003elet scene, camera, renderer, tornado, debris, clouds, lightning;\n\nfunction init() {\n    scene = new THREE.Scene();\n    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n    renderer = new THREE.WebGLRenderer();\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    document.body.appendChild(renderer.domElement);\n\n    camera.position.set(0, 5, 20);\n    const controls = new THREE.OrbitControls(camera, renderer.domElement);\n    controls.enableDamping = true;\n    controls.dampingFactor = 0.05;\n\n    createSkybox();\n    createGround();\n    createTornado();\n    createDebris();\n    createClouds();\n    createLightning();\n    createScenery();\n\n    window.addEventListener(\'resize\', onWindowResize, false);\n\n    animate();\n}\n\nfunction createSkybox() {\n    const skyGeometry = new THREE.BoxGeometry(1000, 1000, 1000);\n    const skyMaterial = new THREE.MeshBasicMaterial({ color: 0x4a4a4a, side: THREE.BackSide });\n    const skybox = new THREE.Mesh(skyGeometry, skyMaterial);\n    scene.add(skybox);\n}\n\nfunction createGround() {\n    const groundGeometry = new THREE.PlaneGeometry(100, 100);\n    const groundMaterial = new THREE.MeshPhongMaterial({ color: 0x3a9d23 });\n    const ground = new THREE.Mesh(groundGeometry, groundMaterial);\n    ground.rotation.x = -Math.PI / 2;\n    scene.add(ground);\n}\n\nfunction createTornado() {\n    const tornadoGeometry = new THREE.ConeGeometry(2, 20, 32);\n    const tornadoMaterial = new THREE.MeshPhongMaterial({ color: 0x666666, transparent: true, opacity: 0.8 });\n    tornado = new THREE.Mesh(tornadoGeometry, tornadoMaterial);\n    tornado.position.set(0, 10, 0);\n    scene.add(tornado);\n}\n\nfunction createDebris() {\n    debris = new THREE.Group();\n    for (let i = 0; i \u003c 50; i++) {\n        const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);\n        const material = new THREE.MeshPhongMaterial({ color: 0x8b4513 });\n        const particle = new THREE.Mesh(geometry, material);\n        particle.position.set(\n            (Math.random() - 0.5) * 4,\n            Math.random() * 20,\n            (Math.random() - 0.5) * 4\n        );\n        debris.add(particle);\n    }\n    scene.add(debris);\n}\n\nfunction createClouds() {\n    clouds = new THREE.Group();\n    for (let i = 0; i \u003c 20; i++) {\n        const cloudGeometry = new THREE.SphereGeometry(2, 16, 16);\n        const cloudMaterial = new THREE.MeshPhongMaterial({ color: 0x444444, transparent: true, opacity: 0.8 });\n        const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial);\n        cloud.position.set(\n            (Math.random() - 0.5) * 40,\n            20 + Math.random() * 10,\n            (Math.random() - 0.5) * 40\n        );\n        cloud.scale.set(1 + Math.random(), 0.8 + Math.random() * 0.4, 1 + Math.random());\n        clouds.add(cloud);\n    }\n    scene.add(clouds);\n}\n\nfunction createLightning() {\n    lightning = new THREE.PointLight(0xffffff, 0, 100);\n    lightning.position.set(0, 30, 0);\n    scene.add(lightning);\n}\n\nfunction createScenery() {\n    // Trees\n    for (let i = 0; i \u003c 20; i++) {\n        const treeGeometry = new THREE.ConeGeometry(1, 4, 8);\n        const treeMaterial = new THREE.MeshPhongMaterial({ color: 0x2d4c1e });\n        const tree = new THREE.Mesh(treeGeometry, treeMaterial);\n        tree.position.set(\n            (Math.random() - 0.5) * 80,\n            2,\n            (Math.random() - 0.5) * 80\n        );\n        scene.add(tree);\n    }\n\n    // Houses\n    for (let i = 0; i \u003c 5; i++) {\n        const houseGroup = new THREE.Group();\n\n        const baseGeometry = new THREE.BoxGeometry(3, 2, 3);\n        const baseMaterial = new THREE.MeshPhongMaterial({ color: 0xd2b48c });\n        const base = new THREE.Mesh(baseGeometry, baseMaterial);\n        houseGroup.add(base);\n\n        const roofGeometry = new THREE.ConeGeometry(2.5, 1.5, 4);\n        const roofMaterial = new THREE.MeshPhongMaterial({ color: 0x8b4513 });\n        const roof = new THREE.Mesh(roofGeometry, roofMaterial);\n        roof.position.y = 1.75;\n        roof.rotation.y = Math.PI / 4;\n        houseGroup.add(roof);\n\n        houseGroup.position.set(\n            (Math.random() - 0.5) * 60,\n            1,\n            (Math.random() - 0.5) * 60\n        );\n        scene.add(houseGroup);\n    }\n}\n\nfunction onWindowResize() {\n    camera.aspect = window.innerWidth / window.innerHeight;\n    camera.updateProjectionMatrix();\n    renderer.setSize(window.innerWidth, window.innerHeight);\n}\n\nfunction animate() {\n    requestAnimationFrame(animate);\n\n    tornado.rotation.y += 0.05;\n    tornado.scale.y = 1 + Math.sin(Date.now() * 0.001) * 0.1;\n\n    debris.children.forEach((particle) =\u003e {\n        particle.position.applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.1);\n        particle.position.y = (particle.position.y + 0.1) % 20;\n    });\n\n    if (Math.random() \u003c 0.03) {\n        lightning.intensity = 1;\n        setTimeout(() =\u003e {\n            lightning.intensity = 0;\n        }, 100);\n    }\n\n    renderer.render(scene, camera);\n}\n\ninit();\u003c/script\u003e\u003c/body\u003e\n\u003c/html\u003e',
            additional_notes:
              'This implementation creates an interactive 3D visualization of a tornado using Three.js. The scene includes a rotating tornado, debris particles, lightning effects, and rural scenery elements such as trees and houses. The user can look around the scene using the mouse. No additional installation is required as the Three.js library is imported directly in the HTML file.',
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
];

export const taskListImgEvaluation: Task[] = [
  {
    taskId: 'a4e72fb1-3bf0-4904-9254-b5e5e95e427a',
    title: 'Text to Image Task',
    body: 'Generate an image of a green dog.',
    expireAt: '2024-12-03T15:04:00Z',
    type: 'TEXT_TO_IMAGE',
    taskData: {
      task: 'TEXT_TO_IMAGE',
      prompt: 'Generate an image of a green dog.',
      criteria: [
        {
          type: 'rich-human-feedback',
          label: 'Image Pointers',
        },
      ],
      responses: [
        {
          model: 'stabilityai/stable-diffusion-xl-base-1.0',
          completion: {
            url: 'https://dojo-files-dev.tensorplex.dev/demo/NYSEWithEmotionsAndRedGreenCharts2.png',
            filename: 'green_dog1.png',
          },
        },
      ],
    },
    status: 'IN_PROGRESS',
    numResults: 0,
    maxResults: 10,
    numCriteria: 4,
    isCompletedByWorker: false,
  },
];

export const tasklistFull: Task[] = tasklistCodegen
  .concat(task3d)
  .concat(taskTTI)
  .concat(taskListImgEvaluation)
  .map((task, idx) => {
    return { ...task, taskId: `demo_${idx}` };
  });
