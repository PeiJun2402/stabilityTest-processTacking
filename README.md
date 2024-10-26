## Stability Test - Process Tacking Application  安定性測試流程追蹤 應用程式

### 應用程式介紹 & 開發目的
**基本介紹**
<p>【安定性測試】是在保養品製造過程中，一項評估產品在不同條件下能否保持其品質與功效的關鍵步驟。
這些測試旨在確保產品在一定的時間內不會出現變質、變色、分層或產生異味，並且能夠穩定地提供預期的護膚效果。
是研發化妝品時必經的步驟，確保產品質量穩定及安全的重要環節，且也是法規規定產品上市的必要條件之一。</p>

**開發目的** 
<p>安定性測試流程追蹤 Stability Test Process Tacking是一款專為保養品製造流程中的產品檢驗流程改善應用，基本上安定性測試需經過3個部門，分別為業務部、研發部、生產部共通協力合作，來完成檢驗，
改善以下幾點 </p>
1.【時程掌控精確】通常檢測項目複雜且耗時，並要隨時注意排單生產狀況 → 透過明確的資訊顯示讓3個部門都能快速理解時程安排狀況 <br>
2.【資料劃分．提供最需要的資訊】檢測整體需要產品的一般資訊、檢驗紀錄、可否生產狀態等等許多資訊，如各部門都要從這麼多資料中查看出自己需要的資訊會降低效率→ 透過資料劃分，僅提供各部門最需要的資料，降低不必要的資訊提供，來避免誤刪或修改資料的可能性 <br>
3.【降低溝通成本】跨部門合作中最常見現象是，需要經常告知其他部門目前項目狀態，是否可以開始處理工作內容等等 → 透過功能權限的開放，降低各部門互相通知需求 <br>

---
### 各部門 應用功能介紹
**Sale 業務部門**  <br>
**顯示**
* 首行顯示目前未執行項目數，和已執行項目數
* 每一項測試的階段進度

**功能**
* 可以建立安定性測試請求
* 有權限刪除安定性測試請求
* 可進入「EditForm」頁面，來修改表單中，客戶基本資訊和產品資訊部分

**權限開放**
* 直到研發端按下「Finished」按鈕，與客戶確認的checkbox功能才會在業務端開放使用
* 直到檢測完成時，業務端擁有權限查看每一項測試的數據紀錄，但無更改權利
* 檢測完成的項目，業務端擁有權限將檢測項目再次退回給研發端或生產端，將數據進行修改調整
 <br>
 <br>

**Development 研發部門**  <br>
**顯示**
* 顯示區塊分成2塊，已執行的測試和尚未執行的測試


**功能**
* 可進入「TestStageRecord」頁面，記錄每一階段測試數據與狀況
* 每一階段按下「Unfinished」按鈕後，會顯示成「Finished」後，並自動跳下一階段測試，且目前測試數據不再可以更改
* 需修改數據，只要按鈕切換成「unfinished」，可以輸入或編輯數據


**權限開放**
* 當所有測試完成後，Development頁面的測試項目會出現「Finished」按鈕，按下後表示研發部門工作完成，檢測項目轉移至生產端
 <br>
 <br>

**Manufacture 生產部門**  <br>
**顯示**
* 安定性測試研發端確認結束後，才會顯示
* 無檢測項目完成時，會顯示「尚未排單需求」等字樣


**功能**
* 填寫確認上線生產日期
* 填寫完畢後，資料將轉移到業務端


### 使用流程講解
![安定性測驗流程追蹤_程式說明_工作區域 1](https://github.com/user-attachments/assets/b445a741-9491-429e-bc9f-e398e57036dc)

---


### 開發工具使用
* HTML - 建立vue框架
* CSS&SCSS - 建立樣式
* javascript 搭配vue - 撰寫應用邏輯
* vite - 打包工具
* pinia - 管理資料狀態
* firestore - 後端資料庫使用
* figma - 製作網頁畫面架構與樣式

