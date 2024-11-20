const chatBotFileInputRef = useRef(null);

const [chatbotText, setChatbotText] = useState("");
const [chatbotFiles, setChatbotFiles] = useState([]);
const [chatbotMessages, setChatbotMessages] = useState([
  {
    type: "bot",
    text: "To fill in the empty fields, either manually input data or upload relevant documents to generate data.",
  },
]);

const handleChatbotTextChange = (e) => {
  setChatbotText(e.target.value);
};

const handleChatbotFileChange = (e) => {
  setChatbotFiles([...e.target.files]);
};

const handleChatbotSvgClick = () => {
  chatBotFileInputRef.current.click();
};

const handleChatbotSubmit = async (e) => {
  e.preventDefault();
  setChatbotMessages([...chatbotMessages, { type: "user", text: chatbotText }]);
  const formData = new FormData();
  formData.append("user_query", chatbotText);
  formData.append("company_name", companyName);
  if (chatbotFiles.length > 0) {
    chatbotFiles.forEach((file) => {
      formData.append("documents", file);
    });
  }

  // for (let [key, value] of formData.entries()) {
  //   console.log(`${key}: ${value}`);
  // }

  try {
    const chatBotResponse = await fetch("http://127.0.0.1:8000/api/chatbot/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: formData,
    });
    const chatBotResponseData = await chatBotResponse.json();
    console.log("chatBotResponseData : ", chatBotResponseData);
    setChatbotMessages([
      ...chatbotMessages,
      { type: "user", text: chatbotText },
      { type: "bot", text: chatBotResponseData },
    ]);
    setChatbotText("");
    setChatbotFiles([]);
    chatBotFileInputRef.current.value = "";
  } catch (error) {
    console.error("Error submitting the form : ", error);
  }
};

function chatbot() {
  return (
    <div className="company-detail-below-thirdContainer">
      <div className="company-detail-below-thirdContainer-chatting">
        {chatbotMessages &&
          chatbotMessages.map((msg, index) => (
            <div
              key={index}
              className="company-detail-below-thirdContainer-chatting-1"
            >
              {msg.type === "user" ? (
                <>
                  <h3>YOU</h3>
                  <p>{msg.text}</p>
                </>
              ) : (
                <>
                  <img
                    style={{ width: "40px" }}
                    src="./bot.png"
                    alt="stimulai"
                  />
                  <p>{msg.text}</p>
                </>
              )}
            </div>
          ))}
      </div>
      <div className="company-detail-below-thirdContainer-inp">
        <textarea
          type="text"
          placeholder="Type your message..."
          value={chatbotText}
          onChange={handleChatbotTextChange}
        />
        <input
          type="file"
          ref={chatBotFileInputRef}
          multiple
          style={{ display: "none" }}
          onChange={handleChatbotFileChange}
        />
        <button onClick={handleChatbotSubmit}>
          <img
            style={{ width: "50px", height: "48px" }}
            src="./botsendbutton.png"
            alt="SendButton"
          />
        </button>
        <svg
          onClick={handleChatbotSvgClick}
          fill="#000000"
          height="30"
          width="30"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <g>
              <path d="M256,0c-54.013,0-97.955,43.943-97.955,97.955v338.981c0,41.39,33.674,75.064,75.064,75.064c41.39,0,75.064-33.674,75.064-75.064V122.511c0-28.327-23.046-51.375-51.375-51.375c-28.327,0-51.374,23.047-51.374,51.375v296.911h31.347V122.511c0-11.042,8.984-20.028,20.028-20.028s20.028,8.985,20.028,20.028v314.424c0,24.106-19.612,43.717-43.718,43.717c-24.106,0-43.717-19.612-43.717-43.717V97.955c0-36.727,29.88-66.608,66.608-66.608s66.608,29.881,66.608,66.608v321.467h31.347V97.955C353.955,43.943,310.013,0,256,0z" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default chatbot;
