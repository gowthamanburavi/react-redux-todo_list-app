import React, { useRef, useState } from "react";
import { FaEdit, FaSave } from "react-icons/fa";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

export const TodosItem = (props) => {
  // const SHOW_BUTTON = { display: "inline" };
  // const HIDE_BUTTON = { display: "none" };
  // const [editStyle, setEditStyle] = useState(SHOW_BUTTON);
  // const [saveButton, setSaveButton] = useState(HIDE_BUTTON);

  const inputRef = useRef(true);
  const { item, removeTodo, updateTodo, completeTodo } = props;

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
    // setEditStyle(HIDE_BUTTON);
    // setSaveButton(SHOW_BUTTON);
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  console.log(inputRef.current, item);
  return (
    <>
      <motion.li
        inital={{
          x: "150vw",
          transition: { type: "spring", duration: 2 },
        }}
        animate={{
          x: 0,
          transition: { type: "spring", duration: 2 },
        }}
        whileHover={{
          scale: 0.9,
          transition: { type: "spring", duration: 0.1 },
        }}
        exit={{
          x: "-60vw",
          scale: [1, 0],
          transition: { duration: 2 },
          backgroundColor: "rgba(255, 0, 0, 0.1)",
        }}
        key={item.id}
        className="card"
      >
        <textarea
          ref={inputRef}
          disabled={inputRef}
          defaultValue={item.item}
          onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
        />
        <div className="btns">
          {/* edit button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => changeFocus()}
            // style={editStyle}
          >
            <FaEdit />
          </motion.button>
          {/* <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => update(item.id, inputRef.current.value, e)}
            // style={saveButton}
          >
            <FaSave />
          </motion.button> */}
          {/* complete condition */}
          {item.completed === false && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ color: "green" }}
              onClick={() => completeTodo(item.id)}
            >
              <IoCheckmarkDoneSharp />
            </motion.button>
          )}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ color: "red" }}
            onClick={() => removeTodo(item.id)}
          >
            <IoClose />
          </motion.button>
        </div>
        {item.completed && <span className="completed">done</span>}
      </motion.li>
    </>
  );
};
