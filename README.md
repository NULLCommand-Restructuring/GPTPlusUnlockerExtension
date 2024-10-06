# GPT Plus Unlocker
![GPT Plus Unlocker](https://nullcommand1.github.io/NULLCommand1/GPTPlusUnlockerExtension-DemoResources/gpt-plus-unlocker.png)

**GPT Plus Unlocker** is a Chrome browser extension that allows users to temporarily experience the **GPT Plus service of ChatGPT** for free. This extension works on **Chrome**, using cloud-stored data to unlock the service. Simply enter your **ChatGPT account email address**, click the **"UNLOCK"** button, and you can immediately experience the **premium features of GPT Plus** for a limited time.

## Purpose and Advice

This extension is created to provide a temporary experience for new users who want to test the features of ChatGPT Plus before deciding to purchase the Plus package from OpenAI. This is an opportunity for users to experience some advanced features without committing to a purchase upfront.

However, we encourage users not to abuse this extension for regular use. For the best and continuous experience with the highest quality, we recommend users consider purchasing the official Plus package from OpenAI. This ensures you are always up-to-date and have the best experience with ChatGPT without limitations or interruptions.

## Installation Guide

Below are detailed steps to install the extension for Chrome from the source code. This process is useful when you are developing a new extension or want to test an extension not downloaded from the Chrome Web Store.

---

#### Step 1: Download the source code

- First, download the source code of the extension to your computer.
    - The source code is available on GitHub, you can download it by clicking the **"Code"** button and selecting **"Download ZIP"** 📦.
    - Extract the downloaded `.zip` file to get the folder containing all the source files of the extension.

**Note:** Ensure the source code has been checked and is reliable before installation, as some extensions may affect your security or privacy.

---

#### Step 2: Open the extensions management page on Chrome

1. **Open the Chrome browser** on your computer.
     
2. **Access the extensions management page** by entering in the address bar:  
     ```
     chrome://extensions/
     ```
     Or you can quickly access it by:
     - Clicking the three vertical dots icon at the top right corner of Chrome ⋮.
     - Selecting "More tools" from the dropdown menu.
     - Selecting "Extensions".

---

#### Step 3: Enable Developer Mode

- Once on the extensions management interface, **enable Developer Mode** by:
    - Clicking the **toggle switch** at the top right corner of the screen.
    - After enabling, the interface will display additional options such as: "Reload", "Load unpacked", and "Pack extension".

---

#### Step 4: Load unpacked extension

1. **Click the "Load unpacked"** button on the interface.
     
2. **Select the folder containing the source code** of the extension from the opened window.
     - Ensure you select the correct **root folder** containing files like `manifest.json`, `background.js`, or other necessary files for the extension that you extracted in step 1.
     
3. **Click "Select folder"** to complete the loading process.

---

#### Step 5: Check and run the extension

- After loading the source code, the extension will appear in the list of extensions on Chrome. Check if the extension has been successfully installed by opening the popup or checking other options of the extension.

## Usage 
1. Click the **GPT Plus Unlocker extension icon** on the Chrome toolbar to open the extension popup.
2. In the **popup window** that appears, enter the **email address of your ChatGPT account** you want to unlock into the **EMAIL YOUR GPT ACCOUNT** field.
3. Enable necessary options like **CONTINUOUS UNLOCKING** if you want the extension to automatically unlock the service every 3.5 seconds.
4. Click the **UNLOCK** button to unlock the GPT Plus service.
5. Wait a few seconds for the extension to process, and you will receive a **notification when the unlock is successful**.

## Required Permissions
The extension requires the following permissions:
- `activeTab`: To access and interact with the current tab.
- `scripting`: To run necessary JavaScript code.
- `tabs`: To access and interact with browser tabs.
- `cookies`: To access and manage ChatGPT cookies for unlocking the service.

## Contribution

We welcome contributions from the community! If you would like to contribute to the **GPT Plus Unlocker** project, please follow these steps:

1. **Fork the Repository**: Click the "Fork" button at the top right corner of the repository page to create a copy of the repository in your GitHub account 🍴.

2. **Clone Your Fork**: Clone the forked repository to your local machine using the following command:

    ```bash
     git clone https://github.com/NULLCommand-Restructuring/GPTPlusUnlockerExtension.git
     cd GPTPlusUnlockerExtension
     ```

3. **Create a Branch**: Create a new branch for your feature or bug fix:
     ```bash
     git checkout -b your-feature-branch
     ```

4. **Make Changes**: Implement your changes in the new branch. Ensure your code follows the project's coding standards and includes appropriate tests.

5. **Commit Changes**: Commit your changes with a descriptive commit message:
     ```bash
     git add .
     git commit -m "Description of your changes"
     ```

6. **Push to GitHub**: Push your changes to your forked repository:
     ```bash
     git push origin your-feature-branch
     ```

7. **Submit a Pull Request**: Go to the original repository and click the "New Pull Request" button. Select your branch and submit the pull request. Provide a clear description of your changes and any related issues.

8. **Review Process**: Your pull request will be reviewed by the maintainers. They may request changes or ask for additional information. Please be responsive and address any feedback promptly.

Thank you for your contributions! Together, we can make **GPT Plus Unlocker** even better.

## Contact

If you have any questions or feedback, please contact via email: nullcommand1@gmail.com 📧.
