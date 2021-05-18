import Footer from "../components/footer";
import Header from "../components/header";
import PageTitle from "../components/pageTitle";
import styles from '../styles/Account.module.css'

export default function Account(){
    const profile = {
        firstName: 'Kumar',
        lastName: 'Rangarajan',
        phone: "123-456-7890",
        email: "test@user.com"
    }

    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    
    const renderDetail = () =>{
        const keys = Object.keys(profile)
        
        return (
          <div className={styles.detailWrapper}>
            <ul>
              {keys.map(key => {
                return (
                  <li key={key} className={styles.detailItem}> 
                    <label className={styles.detailItemLabel}>{capitalize(key)}</label>
                    <label className={styles.detailValueLabel}>{profile[key]}</label>
                  </li>
                  )
                })}
            </ul>
          </div>
        )
      }
    return(
        <>
            <Header />
            <div className='content'>
                <PageTitle title={'Account'}></PageTitle> 
                {renderDetail()}
            </div>
            <Footer />
        </>
    )
}