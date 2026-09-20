import API_URL from "../config"
import { useState } from "react"

type ImageUploadProps = {
  label: string
  value: string
  onUpload: (url: string) => void
}

function ImageUpload({
  label,
  value,
  onUpload,
}: ImageUploadProps) {
  const [uploading, setUploading] =
    useState(false)

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file =
      event.target.files?.[0]

    if (!file) {
      return
    }

    const token =
      localStorage.getItem(
        "adminToken"
      )

    const formData =
      new FormData()

    formData.append(
      "image",
      file
    )

    try {
      setUploading(true)

      const response =
        await fetch(
          `${API_URL}/api/upload`,
          {
            method: "POST",

            headers: {
              Authorization:
                `Bearer ${token}`,
            },

            body: formData,
          }
        )

      if (
        response.status === 401
      ) {
        localStorage.removeItem(
          "adminToken"
        )

        window.location.href =
          "/admin/login"

        return
      }

      if (!response.ok) {
        throw new Error(
          "Image upload failed"
        )
      }

      const data =
        await response.json()

      onUpload(
        data.imageUrl
      )
    } catch (error) {
      console.error(
        "Upload error:",
        error
      )

      alert(
        "Could not upload image"
      )
    } finally {
      setUploading(false)
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection:
          "column",
        gap: "10px",
        marginBottom:
          "10px",
      }}
    >
      <label>
        <strong>
          {label}
        </strong>
      </label>

      <input
        type="file"
        accept="image/*"
        onChange={
          handleFileChange
        }
      />

      {uploading && (
        <p>Uploading...</p>
      )}

      {value && (
        <img
          src={value}
          alt={label}
          style={{
            width: "220px",
            height: "140px",
            objectFit: "cover",
            borderRadius: "6px",
          }}
        />
      )}
    </div>
  )
}

export default ImageUpload