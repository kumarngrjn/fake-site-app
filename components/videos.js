import Image from "next/image"
import Link from "next/link";
import styles from '../styles/Videos.module.css'

function Videos({videosLists}){
   
    return(
        <ul className={styles.listItemWrapper}>
            {videosLists && videosLists.map(video => <Video key={video.id} {...video} />)}
        </ul>
    )

}


function Video(props){
    const {title, description, thumbnail_medium, thumbnail_small, url } = props
    const truncated = description.length > 200 ;
    const descriptiontruncated = description.length > 200 ? description.substring(0, 200)+'...' : description
    return(
        <li className={styles.listItem}>
            <div className={styles.listInfo}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.description}>
                    <p dangerouslySetInnerHTML={{ __html: descriptiontruncated }}></p>
                    {truncated && <Link href={'#'}>Read More...</Link>}
                </div>
            </div>
            <div className={styles.imageWrapper}><a target='_blank' href={url}><img src={thumbnail_medium} width={200} height={150} /></a></div>
        </li>
    )
}

export default Videos;
