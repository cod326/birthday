let balloonBox = document.querySelector(".back-balloon");
let noOfBalloon = Math.floor(window.innerWidth / 50 * window.innerHeight / 60);
let balloonsPerColomn = Math.floor(window.innerHeight / 60);
let a = 0;
let balloons = "";
let colors = [
  "--r:0;--g:80;--b:225;--lastColor:rgba(0,225,225, 0.5)",
  "--r:225;--g:80;--b:0;--lastColor:rgba(225,225,0, 0.5)",
  "--r:225;--g:0;--b:80;--lastColor:rgba(225,0,225, 0.5)"
];
balloons += `<div class="balloon-line">`;
while (a < noOfBalloon / 3) {
  let b = 1;
  let colorStyle = colors[a % colors.length];
  balloons += `<div class="balloon" style="${colorStyle};--height:${window.innerHeight};">
      <svg viewBox="0 0 68 188" xmlns="http://www.w3.org/2000/svg">
    <image href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAC8CAYAAADB0gjGAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPlSURBVHhe7ZzRbVVBDEQTKIAGoA8oBPqAPqCQ0Af0AfQBnqtdaTLayydCOnMk6yb5eyPb4/Xel4f/mC8Tvy2eJrCkGPodS8UwKoZRMYyPEy7GtwksFcNIMX5MYGlmGBXDeD9RMRbvJlwMdM9IMX5OvJ5AUjEMfXAJ4IJUDAtlCxYXAi+G7LRiLPLkqkEMS8UwciRH7zRy1kAvhVMM9EieswZ6ChWeGYraqwVajHQUtL3WUQIXA73xEsoGFwTtKNk3tB/Fkn0DPZYLFwPfN3LeQPeNvEdB9w3h5xT8vJFrQDTpKvhS8QEMXyrZSNGnWOFi4AewzA48brP4RtrsCLQt32KgN2Ci2TG8WE/h/eLreqLx7GgznXBBsOySabkEnh1od3lcTy+T/TckKhk/uP1aTywSxPej39cTSzMkkCDuMDrYoZEgtVlDgnhWvFlPLBKkBLldR9MMucEzBH3SfbmeryZ8HsE7j6ZVzxLs7f7uIZpQfUrFL4jE5wnPEvxtnfDbfvwYL7KXKPDkfhV/PyNckIqyyLeH8G8BiBQF/+KMSFH0O/q1TOGCKGTJnybQ5Hvuir4hMJGi4EvoNLwp8OefUwkpW9BnIH34dCEFfmY5ZYsCXUbqLfn1M4UyCC3MyYl2oN0ov3S0Az3+35WRAj3UqYzuhMH3l5NN62zUxnsTaGHu5heVF1qYO0dSKaGt+q7x1qonTsKgrVoHx1r1AX34k1XjVw1/s2o0d46ELiM13lMZqefgy0izSgqDdiNxKiNlC3qo04dPURTNlokURX9Do8aaoqDH/01OunImdF8RpxLCi5J7F2UKnhz9K8qQmfJ2Ak/2FPQZaOPjvn7Gk1Nts2TI0imDl8515qF/xczHefw3UoWfea65hJ4h7jBXhqD/NcbCG2rLZvDG2gwZnmVIBXkuyCO9qfpe5PpWKl0Qv8O5/rsOXRDfyOP/u47Y7qLAH/Byg3ZBLhnPiA/riSX3IXj8vgZ/gZW9A/36hPCzCz478hoCTV6A4+cOLxUFmtywoy+701XQpZJ9A+8q7RtGvseK7hu94TdSDF8C4chJVOJgSTHQjpJioN8fSzEUWJoZRsUwUgxNpNjB69QzKsYKdJnkBIoWw68N8GLow7sY2HE8b9fwYuRyRw0VSa790GKcZgzsVWPaKnr6TFtVIMU4OQl2saPekE6CtdW8TVNgneTUPLFOkmM41klOkye2eZ76BbZ5Zr9QYK8VO2wtTsMWdqHTfmG0XyxUIp0vFqdlDna+OC1zsOeRtFTseeTOUpH9opZq1FIXtVTjtOKrpVpgLVV4mWAt1dliYC21lFJKKeXf8vDwB9TWxnsPAJ4qAAAAAElFTkSuQmCC" x="0" y="0" width="68" height="188"/>
      </svg>
    </div>`;
  a++;
  b++;
}

balloons += '</div>';
balloonBox.innerHTML = balloons;

//Othes
  let audio = document.querySelector("audio");
let btn = document.querySelector("button");
let cakeAndWish = document.querySelector(".cakeAndWish");

btn.addEventListener("click", () => {
  cakeAndWish.style.display = "block";
  document.querySelector(".content").style.display = "none";
  audio.play();
});

audio.addEventListener('ended', function () {
  window.close();
});

