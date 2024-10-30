function handleCallButton(evt){
    setStatusMessage("Calling...");
    navigator.mediaDevices
    .getUserMedia({video: true, audio: true})
    .then((chatStream) => {
        selfViewElem.
    })
}