import { useState, useEffect, useRef } from 'react'
import { db } from '../firebase/config';
//firebase
import { collection, onSnapshot, query, where, orderBy } from 'firebase/firestore';

export const useCollection = (coll, _q, _order) => {
    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);

    // refs to protect from inf re-render from useEffect
    const q = useRef(_q).current;
    const order = useRef(_order).current;

    useEffect(() => {
        let ref = collection(db, coll);
        // to display info depending on query
        if (q) {
            ref = query(ref, where(...q))
        };

        if (orderBy){
            ref = query(ref, orderBy(...order))
        }

        const unsubscribe = onSnapshot(ref, (snapshot) => {
            let results = [];
            snapshot.docs.forEach(doc => {
                results.push({ id: doc.id, ...doc.data() })
            })
            setDocuments(results);
            setError(null)
        }, err => {
            console.log(err)
            setError('could not fetch data')
        })

        return () => unsubscribe(); //cleanup 

    }, [coll, q, order]);

    return { documents, error }
};
