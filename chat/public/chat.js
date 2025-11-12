let currentChannelID;

async function fetchChannels() { 
    const response = await fetch('/Channel')
    const Channels = await response.json();
    const channelSelect = document.getElementById('channel-select');

    channelSelect.innerHTML = ''; // Tøm tidligere kanaler
    Channels.forEach(channel => {
        const option = document.createElement('option');
        option.value = channel.ChannelID;
        option.textContent = channel.ChannelName;
        channelSelect.appendChild(option);
    });

    if (Channels.length > 0) {
        currentChannelID = Channels[0].ChannelID;
        fetchMessages(currentChannelID);
    }
}

async function fetchMessages(currentChannelID) {
    const response = await fetch(`/Channel/${currentChannelID}/Messages`);
    const messages = await response.json();
    const messagesContainer = document.getElementById('messages-container');

    messages.forEach(msg => {
        const messageDiv = document.createElement('div');
        const profilePic = document.createElement('img');

        profilePic.src = msg.ProfilePicture;
        profilePic.alt = `${msg.UserName} Profile Picture`;
        profilePic.style.width = '40px';
        profilePic.style.height = '40px';
        profilePic.style.marginRight = '10px';

        const UsernameContent = document.createElement('span');
        UsernameContent.textContent = `${msg.UserName}:`;

        messageDiv.append(profilePic, UsernameContent);

        if (msg.Conent) {
            const messageContent = document.createElement('span');
            messageContent.textContent = ` ${msg.Conent}`;
            messageDiv.append(messageContent);
        }

        if (msg.ImagePath) {
            const messageImage = document.createElement('img');
            messageImage.src = msg.ImagePath;
            messageImage.alt = 'Image sent in chat';
            messageImage.style.maxWidth = '300px';
            messageImage.style.display = 'block';
            messageImage.style.marginTop = '10px';
            messageDiv.append(messageImage);
        }

        messagesContainer.append(messageDiv);
    });
}

document.getElementById('channel-select').addEventListener('change', (e) => {
    currentChannelID = e.target.value;
    fetchMessages(currentChannelID);
});

fetchChannels();
fetchMessages(currentChannelID);
