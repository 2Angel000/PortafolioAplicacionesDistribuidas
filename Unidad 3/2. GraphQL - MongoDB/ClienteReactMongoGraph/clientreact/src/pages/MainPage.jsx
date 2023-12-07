import React, { useEffect, useRef, useState } from "react";
import { BasePage } from "./BasePage";
import { useMutation, useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import "../pages/styles/Show.css";

const GET_DATA = gql`
  query {
    mostrar {
      id
      nombre
      apellidos
      edad
      pais
    }
  }
`;

const CREATE_POST = gql`
  mutation CreatePost($post: PostInput!) {
    createPost(post: $post) {
      id
      nombre
      apellidos
      edad
      pais
    }
  }
`;

const UPDATE_POST = gql`
  mutation UpdatePost($updatePostId: String, $post: PostInput) {
    updatePost(id: $updatePostId, post: $post) {
      id
      nombre
      apellidos
      edad
      pais
    }
  }
`;

const DELETE_POST = gql`mutation DeletePost($deletePostId: String) {
  deletePost(id: $deletePostId)
}`;

export const MainPage = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(null);
  const { loading, error, data, refetch } = useQuery(GET_DATA);
  const [createPost] = useMutation(CREATE_POST);
  const [updatePost] = useMutation(UPDATE_POST);
  const [deletePost] = useMutation(DELETE_POST);

  const nombreRef = useRef(null);
  const apellidosRef = useRef(null);
  const edadRef = useRef(null);
  const paisRef = useRef(null);

  useEffect(() => {
    refetch();
  });

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleCreatePost = async () => {
    const nombre = nombreRef.current.value;
    const apellidos = apellidosRef.current.value;
    const edad = edadRef.current.value;
    const pais = paisRef.current.value;
    try {
      const { data } = await createPost({
        variables: {
          post: {
            nombre,
            apellidos,
            edad,
            pais,
          },
        },
      });
      refetch();
      clearFields();
      console.log("Datos insertados:", data);
    } catch (err) {
      console.error("Error al insertar datos:", err);
    }
  };

  const clearFields = () => {
    nombreRef.current.value = "";
    apellidosRef.current.value = "";
    edadRef.current.value = "";
    paisRef.current.value = "";
  };

  const startEditPost = (post) => {
    setIsEdit(true);
    console.log("post", post);
    setId(post.id);
    nombreRef.current.value = post.nombre;
    apellidosRef.current.value = post.apellidos;
    edadRef.current.value = post.edad;
    paisRef.current.value = post.pais;
  };

  const handleEditPost = async () => {
    const nombre = nombreRef.current.value;
    const apellidos = apellidosRef.current.value;
    const edad = edadRef.current.value;
    const pais = paisRef.current.value;
    try {
      const { data } = await updatePost({
        variables: {
          updatePostId: id,
          post: {
            nombre,
            apellidos,
            edad,
            pais,
          },
        },
      });
      refetch();
      console.log("Datos actualizados:", data);
      setIsEdit(false);
      setId(null);
      clearFields();
    } catch (err) {
      console.error("Error al insertar datos:", err);
    }
  };

  const handleDeletePost = async (id) => {
    try {
      const { data } = await deletePost({
        variables: {
          deletePostId: id,
        },
      });
      refetch();
      console.log("Datos eliminados:", data);
    } catch (err) {
      console.error("Error al eliminar datos:", err);
    }
  };

  return (
    <>
      <BasePage>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Edad</th>
              <th>Pais</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input placeholder="nombre" type="text" ref={nombreRef} />
              </td>
              <td>
                <input placeholder="apellidos" type="text" ref={apellidosRef} />
              </td>
              <td>
                <input placeholder="edad" type="number" ref={edadRef} />
              </td>
              <td>
                <input placeholder="pais" type="text" ref={paisRef} />
              </td>
              <td>
                {isEdit ? (
                  <button onClick={handleEditPost}>Editar</button>
                ) : (
                  <button onClick={handleCreatePost}>Agregar</button>
                )}
              </td>
            </tr>
            {data.mostrar.map((item) => (
              <tr key={item.id}>
                <td>{item.nombre}</td>
                <td>{item.apellidos}</td>
                <td>{item.edad}</td>
                <td>{item.pais}</td>
                <td>
                  <button
                    onClick={() => {
                      startEditPost(item);
                    }}
                  >
                    Editar
                  </button>
                  <button onClick={() => handleDeletePost(item.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </BasePage>
    </>
  );
};
