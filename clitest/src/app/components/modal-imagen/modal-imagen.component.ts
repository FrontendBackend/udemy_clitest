import { ModalImagenService } from './../../services/modal-imagen.service';
import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/services/file-upload.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-imagen',
  templateUrl: './modal-imagen.component.html',
  styles: [
  ]
})
export class ModalImagenComponent implements OnInit {

  public imagenSubir: File;
  public imgTemp: any;

  constructor(public modalImagenService: ModalImagenService, private fileService: FileUploadService) { }

  ngOnInit(): void {
  }

  cerrarModal() {
    this.imgTemp = null;
    this.modalImagenService.cerrarModal();
  }

  cambiarImagen(file: File) {
    this.imagenSubir = file;

    if (!file) {
      return this.imgTemp = null;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      this.imgTemp = reader.result;
    }

  }

  subirImagen() {

    const id   = this.modalImagenService.id;
    const tipo = this.modalImagenService.tipo;

    this.fileService.actualizarFoto(this.imagenSubir, tipo, id)
      .then(img => {
        Swal.fire('Guardado', 'Imagen de usuario actualizado', 'success');
        this.modalImagenService.nuevaImagen.emit(img)
        this.cerrarModal();
      }).catch(err => {
        console.log(err);
        Swal.fire('Error', 'Error al cambiar la imagen', 'error');
      })
  }
}
