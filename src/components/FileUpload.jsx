import React from "react";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import backgroundImage from "../images/background.jpg";

const PageContainer = styled("div")({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
});

const Overlay = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(255, 255, 255, 0.7)",
});

const UploadContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  height:'25%',
  width:'40%',
  alignItems: "center",
  justifyContent: "center",
  border: "3px dashed #c72f2c",
  padding: "20px",
  backgroundColor: "#96d2d6",
  borderRadius: "8px",
  textAlign: "center",
  cursor: "pointer",
});

const VisuallyHiddenInput = styled("input")({
  marginLeft: "6px",
});

const FileUpload = ({ onFileChange, error, onSubmit }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileChange(file);
    }
  };

  return (
    <PageContainer>
      <Overlay />
      <UploadContainer>
        <CloudUploadIcon sx={{ fontSize: 50, color: "#c72f2c" }} />
        <Button
          disableRipple
          sx={{
            mt: "20px",
            ml: "90px",
            color: "#4a4a4a",
            textTransform: "none",
            "&:hover": { backgroundColor: "transparent" },
            "&:active": { backgroundColor: "transparent" },
          }}
        >
          Upload File
          <VisuallyHiddenInput
            accept=".xlsx"
            type="file"
            name="file"
            onChange={handleFileChange}
          />
        </Button>
        <h3 style={{ color: "blue", fontWeight: "bolder" }}>
          Support only xlsx files
        </h3>
        <Button
          style={{ marginTop: "10px" }}
          onClick={onSubmit}
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
        {error && (
          <Typography variant="h7"  style={{ marginTop:'10px', color:'#dc0101', fontWeight:'bolder'}}>
            {error}
          </Typography>
        )}
      </UploadContainer>
    </PageContainer>
  );
};

export default FileUpload;
