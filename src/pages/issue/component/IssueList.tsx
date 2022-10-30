import React, {useEffect, useState} from "react";
import {AxiosError} from "axios";
import {Link, useNavigate} from "react-router-dom";
import {IssueService} from "../../../services";
import useIssueContext from "../../../hooks/useIssueContext";

export default function IssueList(){
    const [loading, setLoading] = useState(false);
    // @ts-ignore
    const {listIssue, setListIssue} = useIssueContext();

    useEffect(() => {
        async function getListIssue() {
            try {
                setLoading(true)
                const response = await IssueService.getListIssue();
                if (response.status === 200) {
                    console.info(response.data);
                    setListIssue(response.data);    //Todo: open인 것만 근데 ,, closed된건 url자체가 달라서 안불러오는데 .... 필요한가 ,,,
                }
            } catch (error){
                const errorResponse: any = (error as AxiosError).response;
                if (errorResponse){
                    console.error(errorResponse.response.message);
                }
            }finally {
                setLoading(false);
            }
        }
        getListIssue();
    }, []);

    const result = listIssue.sort(function(a: { comments: number; }, b: { comments: number; }){
        return b.comments - a.comments;
    })

    return(
        <div>
            {listIssue.map((row: any) => (
                <div style={styled.issueZone} key={row.id}>
                    <div>
                        <Link to={`/${row.number}`}><h4>{`#${row.number} ${row.title}`}</h4></Link>
                        <p>
                            <span>{`작성자: ${row.user.login}`}, </span>
                            <span>{`작성일: ${row.created_at}`}</span>
                        </p>
                    </div>
                    <div style={styled.comment}>{`코멘트: ${row.comments}`}</div>
                </div>
            ))}
        </div>
    );
}

const styled = {
    issueZone: {
        backgroundColor: 'gray',
        display: 'flex',
        borderBottom: 'solid',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    comment: {
        padding: 40,
    }
}
