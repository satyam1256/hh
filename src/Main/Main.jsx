import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import Editor from "../Pages/Editor/Editor";
import Preview from "../Pages/Preview/Preview";
import { useState } from "react";

const Main = () => {
  const [formId, setFormId] = useState();
  const [formStatus, setFormStatus] = useState("notSubmited");
  return (
    <div className="bg-cavern-pink">
      <Tabs value="editor">
        <TabsHeader className=" max-w-2xl h-[60px] mx-auto mt-8 bg-light-pink">
          <Tab
            key={"Editor"}
            value={"editor"}
            className=" text-xl font-semibold bg-cavern-pink"
          >
            Editor
          </Tab>
          <Tab
            key={"Preview"}
            value={"preview"}
            className=" text-xl font-semibold"
          >
            Preview
          </Tab>
        </TabsHeader>
        <TabsBody>
          <TabPanel key={"Editor"} value={"editor"}>
            <Editor
              setFormId={setFormId}
              setFormStatus={setFormStatus}
            ></Editor>
          </TabPanel>
          <TabPanel key={"Preview"} value={"preview"}>
            {formId ? (
              <Preview
                formId={formId}
                formStatus={formStatus}
                setFormStatus={setFormStatus}
              ></Preview>
            ) : (
              <h1 className="text-2xl h-screen font-semibold text-navy-blue text-center mt-44">
                Please save changes to see preview of your form
              </h1>
            )}
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default Main;
