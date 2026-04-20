"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function EntrarPage() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("Evento");
  const [text, setText] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    setImage(file);
    if (file) {
      const url = URL.createObjectURL(file);
      setImagePreview(url);
    } else {
      setImagePreview(null);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <p className={styles.label}>Painel administrativo</p>
        <h1 className={styles.title}>ATRIVM</h1>
        <p className={styles.sub}>Gestão de eventos e informes</p>
      </div>

      <div className={styles.container}>
        {submitted ? (
          <div className={styles.success}>
            <div className={styles.successIcon}>✓</div>
            <h2>Publicação enviada</h2>
            <p>
              Em breve esta funcionalidade estará integrada ao banco de dados e o informe
              aparecerá automaticamente no site.
            </p>
            <button className={styles.btnPrimary} onClick={() => { setSubmitted(false); setTitle(""); setDate(""); setText(""); setImage(null); setImagePreview(null); }}>
              Adicionar outro
            </button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <h2 className={styles.formTitle}>Adicionar um informe ou evento</h2>

            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Título *</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Ex: Webinário sobre Numismática Romana"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className={styles.fieldSmall}>
                <label className={styles.fieldLabel}>Tipo</label>
                <select
                  className={styles.input}
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option>Evento</option>
                  <option>Informe</option>
                  <option>Curso</option>
                  <option>Conferência</option>
                  <option>Webinário</option>
                  <option>Encontro</option>
                </select>
              </div>
              <div className={styles.fieldSmall}>
                <label className={styles.fieldLabel}>Data</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Ex: 15 de agosto de 2025"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.fieldLabel}>Descrição *</label>
              <textarea
                className={styles.textarea}
                rows={5}
                placeholder="Descreva o evento ou informe..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
              />
            </div>

            <div className={styles.field}>
              <label className={styles.fieldLabel}>Imagem de capa</label>
              <label className={styles.uploadArea}>
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" className={styles.preview} />
                ) : (
                  <div className={styles.uploadPlaceholder}>
                    <span className={styles.uploadIcon}>⬆</span>
                    <span>Clique para selecionar uma imagem</span>
                    <span className={styles.uploadHint}>JPG, PNG ou WEBP</span>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImage}
                />
              </label>
              {imagePreview && (
                <button
                  type="button"
                  className={styles.btnRemove}
                  onClick={() => { setImage(null); setImagePreview(null); }}
                >
                  Remover imagem
                </button>
              )}
            </div>

            <div className={styles.notice}>
              <strong>Aviso:</strong> integração com banco de dados em desenvolvimento.
              O envio ficará registrado quando o sistema estiver ativo.
            </div>

            <div className={styles.actions}>
              <button type="submit" className={styles.btnPrimary}>
                Publicar informe
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
