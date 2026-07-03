import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

const tinyMcePlugins = [
  "advlist",
  "autolink",
  "lists",
  "link",
  "image",
  "charmap",
  "preview",
  "anchor",
  "searchreplace",
  "visualblocks",
  "code",
  "fullscreen",
  "insertdatetime",
  "media",
  "table",
  "help",
  "wordcount",
];

const tinyMceToolbar =
  "undo redo | blocks | bold italic underline forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media | removeformat | help";

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Editor
            apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
            value={value || defaultValue}
            initialValue={defaultValue}
            init={{
              height: 420,
              min_height: 280,
              menubar: false,
              plugins: tinyMcePlugins,
              toolbar: tinyMceToolbar,
              toolbar_mode: "floating",
              mobile: {
                menubar: true,
                toolbar_mode: "scrolling",
                toolbar: [
                  "undo",
                  "redo",
                  "bold",
                  "italic",
                  "link",
                  "image",
                  "bullist",
                  "numlist",
                  "outdent",
                  "indent",
                  "removeformat",
                ],
              },
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; line-height:1.5; }",
              browser_spellcheck: true,
              paste_data_images: true,
              forced_root_block: "p",
              resize: false,
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}
