import { useState } from "react";
import { AnalysisScreen } from "./components/farmer-app/AnalysisScreen";
import { CameraScreen } from "./components/farmer-app/CameraScreen";
import { GalleryScreen } from "./components/farmer-app/GalleryScreen";
import { HistoryScreen } from "./components/farmer-app/HistoryScreen";
import { HomeScreen } from "./components/farmer-app/HomeScreen";
import { LanguageScreen } from "./components/farmer-app/LanguageScreen";
import { SplashScreen } from "./components/farmer-app/SplashScreen";
import { ValidationScreen } from "./components/farmer-app/ValidationScreen";

type Screen =
  | "SPLASH"
  | "LANGUAGE"
  | "HOME"
  | "CAMERA"
  | "GALLERY"
  | "VALIDATION"
  | "ANALYSIS"
  | "HISTORY";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("SPLASH");
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [history, setHistory] = useState<any[]>([
    {
      id: "1",
      plant: "Rice (Paddy)",
      disease: "Leaf Blight",
      date: new Date(Date.now() - 86400000).toISOString(),
      image:
        "https://images.unsplash.com/photo-1634641568774-1906553ade90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwcGxhbnQlMjBsZWFmJTIwZGlzZWFzZSUyMGNsb3NldXB8ZW58MXx8fHwxNzY5NTc3NzU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ]);

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const handleImageSelect = (img: string) => {
    setSelectedImage(img);
    navigateTo("VALIDATION");
  };

  const handleSaveRecord = (record: any) => {
    setHistory((prev) => [{ ...record, id: Date.now().toString() }, ...prev]);
    navigateTo("HOME");
  };

  return (
    <div className="max-w-md mx-auto h-screen bg-slate-50 shadow-2xl overflow-hidden relative">
      {currentScreen === "SPLASH" && (
        <SplashScreen onComplete={() => navigateTo("HOME")} />
      )}

      {/* {currentScreen === "LANGUAGE" && (
        <LanguageScreen
          onSelect={(lang) => {
            setSelectedLanguage(lang);
            navigateTo("HOME");
          }}
        />
      )} */}

      {currentScreen === "HOME" && (
        <HomeScreen
          lang={selectedLanguage}
          history={history}
          onNavigate={(target) => {
            if (target === "CAMERA") navigateTo("CAMERA");
            if (target === "GALLERY") navigateTo("GALLERY");
            if (target === "HISTORY") navigateTo("HISTORY");
          }}
        />
      )}

      {currentScreen === "CAMERA" && (
        <CameraScreen
          onBack={() => navigateTo("HOME")}
          onCapture={handleImageSelect}
        />
      )}

      {currentScreen === "GALLERY" && (
        <GalleryScreen
          onBack={() => navigateTo("HOME")}
          onSelect={handleImageSelect}
        />
      )}

      {currentScreen === "VALIDATION" && selectedImage && (
        <ValidationScreen
          image={selectedImage}
          onRetake={() => navigateTo("CAMERA")}
          onConfirm={() => navigateTo("ANALYSIS")}
        />
      )}

      {currentScreen === "ANALYSIS" && selectedImage && (
        <AnalysisScreen
          image={selectedImage}
          onHome={() => navigateTo("HOME")}
          onSave={handleSaveRecord}
        />
      )}

      {currentScreen === "HISTORY" && (
        <HistoryScreen onBack={() => navigateTo("HOME")} items={history} />
      )}
      {currentScreen === "LANGUAGE" && (
        <LanguageScreen
          onSelect={(lang) => {
            setSelectedLanguage(lang);
            navigateTo("HOME");
          }}
        />
      )}
      
    </div>
  );
}
