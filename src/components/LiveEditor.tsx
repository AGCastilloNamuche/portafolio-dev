import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import dash from "../template/dash-gc.html?raw";
import { Panel, Group, Separator } from "react-resizable-panels";

const LiveEditor = () => {
  const [code, setCode] = useState(dash);
  const [debouncedCode, setDebouncedCode] = useState(dash);

  // Efecto Debounce: Espera 500ms después de que el usuario deja de escribir para actualizar el iframe
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedCode(code);
    }, 500);
    return () => clearTimeout(handler);
  }, [code]);

  return (
    <div className="h-[800px] w-full bg-white/40 backdrop-blur-lg rounded-[2rem] overflow-hidden shadow-xl">
      <Group orientation="horizontal">
        {/* Lado del Editor */}
        <Panel defaultSize={25} minSize={0}>
          <div className="h-full flex flex-col">
            <div className="bg-gray-900/95 text-gray-400 text-xs !px-4 !py-3 font-mono flex items-center justify-between">
              <span className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </span>
              <span>index.html</span>
            </div>
            <div className="flex-grow">
              <Editor
                height="100%"
                defaultLanguage="html"
                theme="vs-dark"
                value={code}
                onChange={(v) => setCode(v || "")}
                options={{ minimap: { enabled: false }, fontSize: 14 }}
              />
            </div>
          </div>
        </Panel>

        {/* El "Manejador" o Resizer */}
        <Separator className="w-2 bg-gray-200/50 hover:bg-teal-500/50 transition-colors flex items-center justify-center relative group">
          {/* Pequeña línea visual para indicar que se puede arrastrar */}
          <div className="h-8 w-[2px] bg-gray-400 group-hover:bg-white rounded-full"></div>
        </Separator>

        {/* Lado de la Vista Previa */}
        <Panel defaultSize={75} minSize={0}>
          <div className="h-full bg-white relative">
            <iframe
              srcDoc={debouncedCode}
              title="Live Preview"
              sandbox="allow-scripts"
              className="w-full h-full border-none pt-8"
            />
          </div>
        </Panel>
      </Group>
    </div>
  );
};

export default LiveEditor;
