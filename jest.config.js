export default {
  testEnvironment: "jsdom",
  // transform: {
  //   "^.+\\.tsx?$": "ts-jest"
  // },
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.app.json"
      }
    ]
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^.+\\.svg$": "jest-transformer-svg",
    "^@app/(.*)$": "<rootDir>/src/app/$1",
    "^@modules/(.*)$": "<rootDir>/src/modules/$1",
    "^@shared/(.*)$": "<rootDir>/src/shared/$1"
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"]
};
