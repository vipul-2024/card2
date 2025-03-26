import react from "react";


export default function Card_temp_1({ toggle, settoggle }) {
  return (
    // MARK: project 1
    < >
    <div className="flex gap-4 flex-wrap justify-center items-center md:flex-row gap-4 ">
  <div className="book">
    <p>Chat-apk</p>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <a href="https://chat-app-ruddy-iota.vercel.app/" target="_blank">View</a>
      </button>
    <div className="cover">
      <p >Chat-apk</p>
    </div>
  </div>

  {/* MARK: project 2 */}
  <div className="book">
    <p>bookerrquiz</p>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <a href="https://bookerrquiz.vercel.app/" target="_blank">View</a>
      </button>
    <div className="cover">
      <p>bookerrquiz</p>
    </div>
  </div>
    {/* MARK: project 3 */}

  <div className="book">
    <p>Fisker-Ocean</p>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <a href="https://fiskerocean.vercel.app/" target="_blank">View</a>
      </button>
    <div className="cover">
      <p>Fisker-Ocean</p>
    </div>
  </div>
  {/* MARK: project 4 */}
  <div className="book">
    <p>Untitled-Form</p>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <a href="https://untitled-form.pages.dev/" target="_blank">View</a>
      </button>
    <div className="cover">
      <p>Untitled-Form</p>
    </div>
  </div>
    {/* MARK: project 5 */}

  <div className="book">
    <p>text-editor</p>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <a href="https://vipulltextedit.pages.dev/
" target="_blank">View</a>
      </button>
    <div className="cover">
      <p>text-editor</p>
    </div>
  </div>
</div>
  </>
  );
}
