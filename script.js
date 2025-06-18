<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Voting Eligibility Checker</title>
</head>
<body>
  <script>
    // Inject styles via JavaScript
    const style = document.createElement('style');
    style.textContent = `
      body {
        font-family: Arial, sans-serif;
        background: #f9f9f9;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }

      .form-container {
        background: #ffffff;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        text-align: center;
        width: 300px;
      }

      .form-container input {
        width: 90%;
        padding: 10px;
        margin: 10px 0;
        font-size: 16px;
      }

      .form-container button {
        padding: 10px 20px;
        font-size: 16px;
        background: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }

      .form-container button:hover {
        background: #0056b3;
      }
    `;
    document.head.appendChild(style);

    // Create container
    const container = document.createElement('div');
    container.classNa
