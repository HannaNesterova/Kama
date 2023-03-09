import React from "react";
import styles from './Profile.module.scss';

const Profile = () => {
    return(
        <div className="content">
        <div>
          <img className={styles.main_img} src="https://img.freepik.com/free-vector/white-background-with-wavy-line_361591-1205.jpg?w=2000&t=st=1678397090~exp=1678397690~hmac=2aa6fcd60a2faa011f84f75c0582cbe96c346459059d282002189ef2a72728c1" alt="img"/>
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU" alt="img"/>
        </div>

        <div>
          my post
          <div>
            new post
          </div>
          <div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
            <div>
              post 3
            </div>
          </div>
        </div>
      </div>
    )
}

export default Profile;