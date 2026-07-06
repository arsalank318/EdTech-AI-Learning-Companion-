// Simple Vanilla JS Router and View Manager
document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".sidebar li");
    const mainContent = document.getElementById("main-content");

    // Views Data
    const views = {
        dashboard: `
    <div class="glass-panel">
        <h1>Welcome back, Learner!</h1>
        <p style="margin-top: 1rem; color: var(--text-secondary);">
            Here is your personalized learning overview.
        </p>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
        <div class="glass-panel">
            <h3>Current Focus</h3>
            <p style="margin-top: 0.5rem; color: var(--accent-color); font-weight: bold;">
                Machine Learning Basics
            </p>
            <div style="margin-top: 1rem; width: 100%; height: 8px; background: var(--bg-color);
                        border-radius: 4px; overflow: hidden;">
                <div style="width: 45%; height: 100%; background: var(--primary-color);"></div>
            </div>
            <p style="margin-top: 0.5rem; font-size: 0.8rem; color: var(--text-secondary);">
                45% Completed
            </p>
        </div>
        <div class="glass-panel">
            <h3>Next Suggested Action</h3>
            <p style="margin-top: 0.5rem; color: var(--text-secondary);">
                Take the short quiz on Neural Networks to test your retention.
            </p>
            <button style="margin-top: 1rem; padding: 0.5rem 1rem; border-radius: 0.5rem;
                           border: none; background: var(--primary-color); color: white;
                           cursor: pointer;">Start Quiz</button>
        </div>
    </div>

    <!-- Demo Data Section -->
    <div style="margin-top: 2rem;">
        <h2 style="color: var(--text-primary); margin-bottom: 1rem;">Your Stats</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    gap: 1rem;">
            <div class="glass-panel" style="text-align: center;">
                <h3 style="margin: 0; font-size: 2rem; color: var(--primary-color);">12</h3>
                <p style="margin: 0; color: var(--text-secondary);">Courses Completed</p>
            </div>
            <div class="glass-panel" style="text-align: center;">
                <h3 style="margin: 0; font-size: 2rem; color: var(--primary-color);">34</h3>
                <p style="margin: 0; color: var(--text-secondary);">Hours Learned</p>
            </div>
            <div class="glass-panel" style="text-align: center;">
                <h3 style="margin: 0; font-size: 2rem; color: var(--primary-color);">5</h3>
                <p style="margin: 0; color: var(--text-secondary);">Day Streak</p>
            </div>
        </div>
    </div>

    <!-- Chart Section -->
    <div style="margin-top: 2rem;">
        <h2 style="color: var(--text-primary); margin-bottom: 1rem;">Progress Over Time</h2>
        <svg width="100%" height="150" viewBox="0 0 300 100" style="background: var(--surface-color); border-radius: 0.5rem;">
            <polyline points="0,80 50,60 100,70 150,40 200,55 250,30 300,20"
                      fill="none" stroke="var(--primary-color)" stroke-width="3" />
        </svg>
    </div>

    <!-- Recent Activity -->
    <div style="margin-top: 2rem;">
        <h2 style="color: var(--text-primary); margin-bottom: 1rem;">Recent Activity</h2>
        <ul style="list-style: none; padding-left: 0;">
            <li style="margin-bottom: 0.5rem;">📝 Completed "Intro to ML"</li>
            <li style="margin-bottom: 0.5rem;">🔎 Reviewed "Neural Networks" notes</li>
            <li style="margin-bottom: 0.5rem;">✅ Passed Quiz 3</li>
        </ul>
    </div>

    <!-- Upcoming Lessons -->
    <div style="margin-top: 2rem;">
        <h2 style="color: var(--text-primary); margin-bottom: 1rem;">Upcoming Lessons</h2>
        <ul style="list-style: none; padding-left: 0;">
            <li style="margin-bottom: 0.5rem;">📚 "Deep Learning Fundamentals" - Tomorrow</li>
            <li style="margin-bottom: 0.5rem;">📚 "Data Visualization" - In 2 days</li>
            <li style="margin-bottom: 0.5rem;">📚 "Model Deployment" - Next week</li>
        </ul>
    </div>
`,
        chat: `
            <div class="glass-panel" style="height: 100%; display: flex; flex-direction: column;">
                <h2>AI Companion Chat</h2>
                <div id="chat-history" style="flex: 1; margin: 1rem 0; background: var(--bg-color); border-radius: 0.5rem; padding: 1rem; overflow-y: auto;">
                    <div style="margin-bottom: 1rem; color: var(--text-secondary);">
                        <strong style="color: var(--accent-color);">AI Companion:</strong> Hello! I am your AI Learning Companion. What would you like to learn today? I can assess your knowledge or explain a new concept.
                    </div>
                </div>
                <div style="display: flex; gap: 1rem;">
                    <input type="text" id="chat-input" placeholder="Type your message..." style="flex: 1; padding: 0.75rem; border-radius: 0.5rem; border: 1px solid var(--border-color); background: var(--bg-color); color: white;">
                    <button id="send-btn" style="padding: 0.75rem 1.5rem; border-radius: 0.5rem; border: none; background: var(--primary-color); color: white; cursor: pointer;">Send</button>
                </div>
            </div>
        `,
        "study-plan": `
            <div class="glass-panel" style="height: 100%; display: flex; flex-direction: column;">
                <h2>Study Plan & Goals</h2>
                <div style="display: flex; gap: 1rem; flex: 1; margin-top: 1rem;">
                    <div style="flex: 1; background: var(--bg-color); border-radius: 0.5rem; padding: 1rem;">
                        <h3 style="color: var(--text-secondary); margin-bottom: 1rem;">To Do</h3>
                        <div style="background: var(--surface-color); padding: 1rem; border-radius: 0.5rem; margin-bottom: 0.5rem; border: 1px solid var(--border-color);">React Framework Basics</div>
                        <div style="background: var(--surface-color); padding: 1rem; border-radius: 0.5rem; margin-bottom: 0.5rem; border: 1px solid var(--border-color);">Advanced CSS</div>
                    </div>
                    <div style="flex: 1; background: var(--bg-color); border-radius: 0.5rem; padding: 1rem;">
                        <h3 style="color: var(--accent-color); margin-bottom: 1rem;">In Progress</h3>
                        <div style="background: var(--surface-color); padding: 1rem; border-radius: 0.5rem; margin-bottom: 0.5rem; border: 1px solid var(--primary-color);">Machine Learning Basics</div>
                    </div>
                    <div style="flex: 1; background: var(--bg-color); border-radius: 0.5rem; padding: 1rem;">
                        <h3 style="color: #10b981; margin-bottom: 1rem;">Done</h3>
                        <div style="background: var(--surface-color); padding: 1rem; border-radius: 0.5rem; margin-bottom: 0.5rem; border: 1px solid var(--border-color); opacity: 0.7;">Introduction to Python</div>
                    </div>
                </div>
            </div>
        `,
        assessment: `
            <div class="glass-panel" style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
                <h2 style="margin-bottom: 2rem;">Knowledge Assessment</h2>
                <div style="width: 100%; max-width: 500px; height: 300px; background: var(--bg-color); border: 2px solid var(--primary-color); border-radius: 1rem; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                    <div>
                        <span style="color: var(--text-secondary); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px;">Question 1 / 5</span>
                        <h3 style="margin-top: 1rem; font-size: 1.5rem;">What is a Neural Network?</h3>
                        <p style="margin-top: 2rem; color: var(--accent-color); font-size: 0.9rem;">Click to reveal answer</p>
                    </div>
                </div>
                <div style="margin-top: 2rem; display: flex; gap: 1rem;">
                    <button style="padding: 0.75rem 1.5rem; border-radius: 0.5rem; border: 1px solid var(--border-color); background: transparent; color: var(--text-primary); cursor: pointer;">Previous</button>
                    <button style="padding: 0.75rem 1.5rem; border-radius: 0.5rem; border: none; background: var(--primary-color); color: white; cursor: pointer;">Next Question</button>
                </div>
            </div>
        `
    };

    // Render View Function
    function renderView(viewName) {
        if(views[viewName]) {
            mainContent.innerHTML = views[viewName];
            
            // Attach event listeners for specific views
            if(viewName === 'chat') {
                setupChatLogic();
            }
        }
    }

    // Mock Chat Logic
    function setupChatLogic() {
        const sendBtn = document.getElementById('send-btn');
        const chatInput = document.getElementById('chat-input');
        const chatHistory = document.getElementById('chat-history');

        sendBtn.addEventListener('click', () => {
            const text = chatInput.value.trim();
            if(!text) return;
            
            // Add User message
            chatHistory.innerHTML += `
                <div style="margin-bottom: 1rem; text-align: right;">
                    <div style="display: inline-block; background: var(--border-color); padding: 0.75rem; border-radius: 0.5rem; color: var(--text-primary);">
                        ${text}
                    </div>
                </div>
            `;
            
            chatInput.value = '';
            chatHistory.scrollTop = chatHistory.scrollHeight;

            // Mock AI Response after 1s
            setTimeout(() => {
                chatHistory.innerHTML += `
                    <div style="margin-bottom: 1rem; color: var(--text-secondary);">
                        <strong style="color: var(--accent-color);">AI Companion:</strong> That's an interesting question! Based on your current knowledge profile, I recommend we break that down into smaller concepts first. Are you ready for a quick exercise?
                    </div>
                `;
                chatHistory.scrollTop = chatHistory.scrollHeight;
            }, 1000);
        });
        
        chatInput.addEventListener('keypress', (e) => {
            if(e.key === 'Enter') sendBtn.click();
        });
    }

    // Navigation Logic
    navItems.forEach(item => {
        item.addEventListener("click", (e) => {
            navItems.forEach(nav => nav.classList.remove("active"));
            e.currentTarget.classList.add("active");
            const view = e.currentTarget.getAttribute("data-view");
            renderView(view);
        });
    });

    // Initial Render
    renderView("dashboard");
});
