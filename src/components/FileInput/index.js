import React, { useState } from "react";
import Dropzone from "react-dropzone";

export default function FilePicker(props) {
  const [files, setFiles] = useState([]);

  async function handleUpload(acceptedFiles) {
    let filesIds = [];
    acceptedFiles.forEach((file, index) => {
      const data = new FormData();

      data.append("file", file);
      /**
       * Fazer upload do arquivo e pegar o id que o arquivo recebeu no banco de dados
       */
      // const response = await api.post(`upload`, data)
      filesIds.push(index); // apenas um exemplo
    });

    setFiles(acceptedFiles);

    props.onChange(props.name, filesIds);
  }

  return (
    <>
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      <Dropzone onDrop={handleUpload}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} style={{ border: "1px dotted red" }}>
            <input {...getInputProps()} id={props.name} />
            {files.length <= 0 ? (
              <p>
                Arraste arquivos ou clique aqui para fazer o upload de arquivos
              </p>
            ) : (
              files.map(file => <p>{file.name}</p>)
            )}
          </div>
        )}
      </Dropzone>
    </>
  );
}
